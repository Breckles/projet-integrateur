import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { filter, pairwise, take } from 'rxjs';
import { AuthService } from 'services/auth.service';

import { ModalService } from 'services/modal.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  private route: string = '';

  constructor(
    private modalService: ModalService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((e: any) => e instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((e: any) => {
        console.log(e[0].urlAfterRedirects); // previous url
      });
  }

  onSignInSuccess() {
    this.modalService.closeModal();
    // this.auth.setUser();
  }
}
