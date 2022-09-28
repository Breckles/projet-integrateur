import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'services/auth.service';

import { IUser } from 'models/user.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  private user: IUser | undefined;
  private userSubscription: Subscription | null = null;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.userSubscription = this.auth.appUser.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }
}
