import {  
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild} from '@angular/core';
import {IIngredientRecette} from 'models/ingredient-recette.model';
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

  @Input()
  showButton: boolean = true;

  @ViewChild('addToMenuModalContent')
  addToMenuModalContent!: TemplateRef<any>;
  constructor(private ms: ModalService) {}

  ngOnInit(): void {
    if (!this.recipeToShow) {
      throw new Error(
        'You must provide a recipe to RecipeDetailModalContentComponent'
      );
    }
  }
  onAddRecipe(e: Event) {
    e.stopPropagation();
    this.ms.openModal(this.addToMenuModalContent);
  }
  closeModal() {
    this.ms.closeModal();
  }
}
