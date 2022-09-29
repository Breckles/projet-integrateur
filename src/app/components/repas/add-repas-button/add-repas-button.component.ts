import { Component, OnInit } from '@angular/core';
import { RecipeCardComponent } from 'components/recipe/recipe-card/recipe-card.component';
import { ModalService } from 'services/modal.service';

@Component({
  selector: 'app-add-repas-button',
  templateUrl: './add-repas-button.component.html',
  styleUrls: ['./add-repas-button.component.scss'],
})
export class AddRepasButtonComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}
  openModal() {
    this.modalService.openModal(RecipeCardComponent);
  }
}
