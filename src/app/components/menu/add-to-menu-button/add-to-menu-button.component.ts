import { Component, OnInit } from '@angular/core';
import { CalendarBlockComponent } from 'components/calendar-block/calendar-block.component';
import { ModalService } from 'services/modal.service';

@Component({
  selector: 'app-add-to-menu-button',
  templateUrl: './add-to-menu-button.component.html',
  styleUrls: ['./add-to-menu-button.component.scss'],
})
export class AddToMenuButtonComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}
  openModal() {
    this.modalService.openModal(CalendarBlockComponent);
  }
}
