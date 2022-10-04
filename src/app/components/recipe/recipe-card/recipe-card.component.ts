import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { IRecette } from 'models/recipe.model';
import { ModalService } from 'services/modal.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input()
  recipe!: IRecette;

  @Input()
  showAddToMenuButton: boolean = true;
  @Input()
  showModifyButton: boolean = false;

  @ViewChild('addToMenuModalContent')
  addToMenuModalContent!: TemplateRef<any>;
  @ViewChild('recipeDetailModalContent')
  recipeDetailModalContent!: TemplateRef<any>;
  @ViewChild('modifyRecipeModalContent')
  modifyRecipeModalContent!: TemplateRef<any>;

  constructor(private ms: ModalService) {}

  ngOnInit(): void {
    if (!this.recipe) {
      throw new Error('You need to provide a recipe for this component');
    }
  }

  onAddRecipe(e: Event) {
    e.stopPropagation();
    this.ms.openModal(this.addToMenuModalContent);
  }

  onShowDetails() {
    console.log(this.recipeDetailModalContent);

    this.ms.openModal(this.recipeDetailModalContent);
  }

  onModifyRecipe(e: Event) {
    e.stopPropagation();
    this.ms.openModal(this.modifyRecipeModalContent);
  }
}
