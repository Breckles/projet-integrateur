import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { MatDialog } from '@angular/material/dialog';
import { FirebaseuiAngularLibraryComponent } from 'firebaseui-angular';

@Injectable({
  providedIn: 'root',
})
export class UserLoggedInGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private dialog: MatDialog) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.user.pipe(
      map((user) => {
        if (user == null) {
          this.dialog.open(FirebaseuiAngularLibraryComponent);
        }

        return user != null;
      })
    );
  }
}
