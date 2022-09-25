import { Component, OnInit } from '@angular/core';
import { ModalService } from 'services/modal.service';
import { RecipeCreateComponent } from '../recipe-create/recipe-create.component';

@Component({
  selector: 'app-add-recipe-button',
  templateUrl: './add-recipe-button.component.html',
  styleUrls: ['./add-recipe-button.component.scss'],
})
export class AddRecipeButtonComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  openModal() {
    this.modalService.openModal(RecipeCreateComponent);
  }
}
