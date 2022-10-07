import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AuthService } from 'services/auth.service';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output()
  onOpenSideNav = new EventEmitter<void>();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }

  openSideNavHandler() {
    this.onOpenSideNav.emit();
  }

  showFiller = false;
}
