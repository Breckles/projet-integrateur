import { Injectable, TemplateRef, Type } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private redirectUrl: string | undefined;

  constructor(private modal: MatDialog, private router: Router) {}

  openModal<T>(
    modalContent: TemplateRef<T> | Type<T>,
    redirectOnClose?: string
  ) {
    this.redirectUrl = redirectOnClose;
    this.modal.open<T>(modalContent, { maxHeight: '90vh' });
    this.modal.afterAllClosed.subscribe(() => {
      this.redirectUrl = undefined;
    });
  }

  closeModal() {
    if (this.redirectUrl) {
      this.router.navigate([this.redirectUrl]);
    }

    this.modal.closeAll();
  }
}
