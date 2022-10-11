import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'services/auth.service';
import { ModalService } from 'services/modal.service';

import { AuthComponent } from 'components/auth/auth.component';

@Injectable({
  providedIn: 'root',
})
export class UserIsAdminGuard implements CanActivate {
  constructor(private auth: AuthService, private ms: ModalService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return this.auth.getUser().then((user) => {
      if (!user) {
        this.ms.openModal<AuthComponent>(AuthComponent, state.url);
      }

      return !!user && user.role == 'A';
    });
  }
}
