import { Component, OnDestroy, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import firebase from 'firebase/compat/app';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  private user: firebase.User | null = null;
  private userSubscription: Subscription | null = null;

  constructor(private auth: AngularFireAuth) {}

  ngOnInit(): void {
    this.userSubscription = this.auth.user.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }
}
