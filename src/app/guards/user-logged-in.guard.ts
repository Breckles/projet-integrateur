import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/compat/auth';

import { FirebaseuiAngularLibraryComponent } from 'firebaseui-angular';

import { ModalService } from '../services/modal.service';
import { AuthComponent } from '../components/auth/auth.component';
import { AuthService } from 'services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserLoggedInGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private modalService: ModalService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.auth.getUser().then((user) => {
      if (!user) {
        this.modalService.openModal<AuthComponent>(AuthComponent, state.url);
      }

      return !!user;
    });
  }
}
