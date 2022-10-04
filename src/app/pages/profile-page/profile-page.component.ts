import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'services/auth.service';

import { IUser } from 'models/user.model';
import { FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  user: IUser | undefined;
  private userSubscription: Subscription | null = null;

  appUser: IUser | undefined;

  constructor(private afs: AngularFirestore, private auth: AuthService) {
    this.auth.appUser.subscribe((user)=>{
      this.appUser=user;
    })
  }

  ngOnInit(): void {
    this.userSubscription = this.auth.appUser.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

/*   async createUser(users: IUser[]){
    const uid = this.afs.createId();
    if(!!this.appUser){
      const newUser: IUser ={
        uid: this.appUser?.uid,
        email: this.appUser?.email,
        role: this.appUser?.role,
        nomAfficher: this.appUser?.nomAfficher
      };
    }
  }  */
  
}
