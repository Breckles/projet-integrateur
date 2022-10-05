import { Component, OnInit } from '@angular/core';
import { AuthService } from 'services/auth.service';
import {MatSidenav} from 'angular/material/sidenav'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  constructor(private auth: AuthService) {}
  ngOnInit(): void {}
  logout() {
    this.auth.logout();
  }
  showFiller = false;
/*   isShowDiv = false
    menuToggle(){ 
      this.isShowDiv = !this.isShowDiv;
    } */
}
