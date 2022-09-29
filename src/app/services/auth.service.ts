import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom, Subject } from 'rxjs';

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
        await this.login();
      } else {
        this.logout();
      }
    });
  }

  async login() {
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
          email: this.firebaseUser.email!,
          role: 'M',
        };

        await this.userCollection.doc(newUser.uid).set(newUser);
        this._appUser = newUser;
      }
    }

    this.appUser.next(this._appUser);
  }

  logout() {
    this._appUser = undefined;
    this.appUser.next(this._appUser);
    this.router.navigate(['/home']);
  }
}
