import { Component, Input, OnInit } from '@angular/core';
import { IRecette } from 'models/recipe.model';
import { ModalService } from 'services/modal.service';

@Component({
  selector: 'app-recipe-detail-modal-content',
  templateUrl: './recipe-detail-modal-content.component.html',
  styleUrls: ['./recipe-detail-modal-content.component.scss'],
})
export class RecipeDetailModalContentComponent implements OnInit {
  @Input()
  recipeToShow!: IRecette;

  constructor(private ms: ModalService) {}

  ngOnInit(): void {
    if (!this.recipeToShow) {
      throw new Error(
        'You must provide a recipe to RecipeDetailModalContentComponent'
      );
    }
  }

  closeModal() {
    this.ms.closeModal();
  }
}
