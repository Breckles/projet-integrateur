import { Component, Input, OnInit } from '@angular/core';
import { IRecette } from 'models/recipe.model';
import { MenuService } from 'services/menu.service';

@Component({
  selector: 'app-add-recipe-to-menu-modal-content',
  templateUrl: './add-recipe-to-menu-modal-content.component.html',
  styleUrls: ['./add-recipe-to-menu-modal-content.component.scss'],
})
export class AddRecipeToMenuModalContentComponent implements OnInit {
  @Input()
  recipeToAdd!: IRecette;
  dateSelected = new Date();

  constructor(private ms: MenuService) {}

  ngOnInit(): void {
    if (!this.recipeToAdd) {
      throw new Error(
        'You must provide a recipe to AddRecipeToMenuModalContentComponent.'
      );
    }
  }

  onConfirm() {
    this.ms.addRecipeToMenu(this.recipeToAdd, this.dateSelected);
  }
}
