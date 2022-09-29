import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import firebase from 'firebase/compat';
import { IUser } from 'models/user.model';
import { firstValueFrom, Observable, Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseUser: firebase.User | null = null;
  private _appUser: IUser | undefined;
  private userCollection: AngularFirestoreCollection<IUser>;
  appUser: Subject<IUser | undefined>;

  constructor(private auth: AngularFireAuth, private afs: AngularFirestore) {
    this.userCollection = this.afs.collection<IUser>('users');
    this.appUser = new Subject<IUser | undefined>();

    this.auth.user.subscribe(async (user) => {
      this.firebaseUser = user;
      await this.setUser();
    });
  }

  async setUser() {
    console.log('in setUser');
    if (this.firebaseUser) {
      const registeredUser = await firstValueFrom(
        this.userCollection.doc(this.firebaseUser.uid).get()
      );

      if (!registeredUser.exists) {
        // newly registered user
        console.log('creating new user');

        const user = {
          uid: this.firebaseUser.uid,
          nomAfficher: '',
          email: this.firebaseUser.email!,
          role: 'M',
        };

        await this.userCollection.doc(user.uid).set(user);
      }

      this.appUser.next(registeredUser.data());
    }
  }
}
