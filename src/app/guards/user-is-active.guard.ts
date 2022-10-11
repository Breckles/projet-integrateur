import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthComponent } from 'components/auth/auth.component';
import { Observable } from 'rxjs';

import { AuthService } from 'services/auth.service';
import { ModalService } from 'services/modal.service';

@Injectable({
  providedIn: 'root',
})
export class UserIsActiveGuard implements CanActivate {
  constructor(private auth: AuthService, private ms: ModalService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.getUser().then((user) => {
      if (!user) {
        this.ms.openModal<AuthComponent>(AuthComponent);
        return false;
      }

      return !!user && user.actif === 1;
    });
  }
}
