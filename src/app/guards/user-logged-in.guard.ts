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

@Injectable({
  providedIn: 'root',
})
export class UserLoggedInGuard implements CanActivate {
  constructor(
    private auth: AngularFireAuth,
    private modalService: ModalService,
    private router: Router
  ) {}

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
          this.modalService.openModal<AuthComponent>(AuthComponent, state.url);
        }
        return user != null;
      })
    );
  }
}
