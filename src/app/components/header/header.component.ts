import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AuthService } from 'services/auth.service';
import { Subscription } from 'rxjs';

import { IUser } from 'models/user.model';
import { ModalService } from 'services/modal.service';
import { AuthComponent } from 'components/auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  onOpenSideNav = new EventEmitter<void>();

  user: IUser | undefined;
  userSub = new Subscription();

  constructor(private auth: AuthService, private ms: ModalService) {}

  ngOnInit(): void {
    this.auth.getUser().then((user) => {
      this.user = user;
    });

    this.userSub = this.auth.appUser.subscribe((user) => {
      this.user = user;
    });
  }

  onLogin() {
    this.ms.openModal<AuthComponent>(AuthComponent);
  }

  onLogout() {
    this.auth.logout();
  }

  openSideNavHandler() {
    this.onOpenSideNav.emit();
  }
}
