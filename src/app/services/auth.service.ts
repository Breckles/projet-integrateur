import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, Subject, take } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat';

import { IUser } from 'models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseUser: firebase.User | null = null;
  private _appUser: IUser | undefined;
  private userCollection: AngularFirestoreCollection<IUser>;
  appUser: Subject<IUser | undefined>;
  private _isAdmin: Subject<boolean> = new Subject();

  constructor(
    private auth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.userCollection = this.afs.collection<IUser>('users');
    this.appUser = new Subject<IUser | undefined>();

    this.auth.user.subscribe(async (user) => {
      if (user) {
        this.firebaseUser = user;
        await this.setAppUser();
      } else {
        this.unsetAppUser();
        this.router.navigate(['/home']);
      }
    });
  }

  async setAppUser() {
    if (this.firebaseUser) {
      const registeredUser = await firstValueFrom(
        this.userCollection.doc(this.firebaseUser.uid).get()
      );

      if (registeredUser.exists) {
        this._appUser = registeredUser.data();
      } else {
        // newly registered user
        const newUser = {
          uid: this.firebaseUser.uid,
          nomAfficher: '',
          avatar: '',
          email: this.firebaseUser.email!,
          role: 'M',
          actif: 1,
        };

        await this.userCollection.doc(newUser.uid).set(newUser);
        this._appUser = newUser;
      }
    }

    this.appUser.next(this._appUser);
    sessionStorage.setItem('appUser', JSON.stringify(this._appUser));
  }

  private unsetAppUser() {
    this._appUser = undefined;
    window.localStorage.removeItem('appUser');
    this.appUser.next(this._appUser);
    sessionStorage.removeItem('appUser');
  }

  async getUser() {
    const sessionUser = sessionStorage.getItem('appUser');

    if (sessionUser) {
      return JSON.parse(sessionUser);
    }

    // const firebaseUser = await this.auth.currentUser;

    return this.auth.currentUser.then((firebaseUser) => {
      if (firebaseUser) {
        return this.userCollection
          .doc(firebaseUser.uid)
          .ref.get()
          .then((res) => res.data());
      }
      return;
    });
  }

  async getAllAppUsers() {
    let appUsers: IUser[] = [];

    const result = await this.userCollection.ref.get();

    if (!result.empty) {
      appUsers = result.docs.map((snapshot) => snapshot.data());
    }

    return appUsers;
  }

  async setAppUserActiveStatus(uid: string, active: boolean) {
    const value = active ? 1 : 0;

    await this.userCollection.ref.doc(uid).update({ actif: value });

    return value;
  }

  async updateUser(updateData: Partial<IUser>) {
    const user = await this.auth.currentUser;
    if (user) {
      await this.userCollection.doc(user.uid).update(updateData);
      this._appUser = { ...this._appUser!, ...updateData };
      this.appUser.next({ ...this._appUser });
    }
  }

  currentUserIsAdmin() {
    return this._isAdmin;
  }

  logout() {
    this.auth.signOut();
  }
}
