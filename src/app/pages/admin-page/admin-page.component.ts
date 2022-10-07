import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from 'models/user.model';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  appUsers: IUser[] = [];

  displayedColumns = ['email', 'nomAfficher', 'actif'];

  constructor(private auth: AuthService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.auth.getAllAppUsers().then((users) => {
      this.appUsers = users;
    });
  }

  onToggleActif(e: any, appUser: IUser) {
    this.auth.setAppUserActiveStatus(appUser.uid, e.checked).then((status) => {
      appUser.actif = status;
      this.snackBar.open('Succes', '', { duration: 2000 });
    });
  }
}
