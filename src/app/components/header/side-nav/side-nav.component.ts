import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'models/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {
  @Output()
  onClose = new EventEmitter<void>();

  user: IUser | undefined;
  userSub = new Subscription();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getUser().then((user) => {
      this.user = user;
    });

    this.userSub = this.auth.appUser.subscribe((user) => {
      this.user = user;

      if (!user) {
        this.onClose.emit();
      }
    });
  }

  onCloseHandler() {
    console.log('in onNavigateHandler');

    this.onClose.emit();
  }

  onLogout() {
    this.auth.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
