import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'services/auth.service';

import { IUser } from 'models/user.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  user: IUser | undefined;
  myForm!: FormGroup;
  @Input()
  userToModify: IUser | null = null;
  private userSubscription: Subscription | null = null;

  constructor(private auth: AuthService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.auth.appUser.subscribe((user) => {
      this.user = user;
    });

    this.auth.getUser().then((user) => {
      this.user = user;
    });
  }

  onSubmit() {
    const userForm = {
      nomAfficher: this.myForm.value.nomAfficher as string,
    };
  }

  async onChangeNomAfficher(newValue: string) {
    if (newValue !== this.user?.nomAfficher) {
      // Send request to change nomAfficher
      const updateData = { nomAfficher: newValue };
      await this.auth.updateUser(updateData);
      this.snackBar.open('Success', '', { duration: 2000 });
    }
  }

  async onChangeAvatar(newValue: string) {
    if (newValue !== this.user?.avatar) {
      // Send request to change nomAfficher
      const updateData = { avatar: newValue };
      await this.auth.updateUser(updateData);
      this.snackBar.open('Success', '', { duration: 2000 });
    }
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }
}
