import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { IIngredientRecette } from 'models/ingredient-recette.model';
import { MatTableModule } from '@angular/material/table';

import { IRecette } from 'models/recipe.model';
import { ModalService } from 'services/modal.service';
import { AuthService } from 'services/auth.service';
import { AuthComponent } from 'components/auth/auth.component';

@Component({
  selector: 'app-recipe-detail-modal-content',
  templateUrl: './recipe-detail-modal-content.component.html',
  styleUrls: ['./recipe-detail-modal-content.component.scss'],
})
export class RecipeDetailModalContentComponent implements OnInit {
  @Input()
  recipeToShow!: IRecette;
  displayedColumns: string[] = ['nom', 'preparation', 'quantite', 'mesure'];
  dataSource = this.recipeToShow;
  @Input()
  showButton: boolean = true;

  @ViewChild('addToMenuModalContent')
  addToMenuModalContent!: TemplateRef<any>;
  poidMesureLabels = [
    'g',
    'kg',
    'ml',
    'l',
    'unite',
    'tasse',
    'c. the',
    'c. soupe',
  ];
  categorieLabels = [
    'Fruits et Legumes',
    'Viande',
    'Charcuterie',
    'Produits Laitiers',
    'Boulangerie',
    'Collation',
    'Autre',
  ];

  constructor(private auth: AuthService, private ms: ModalService) {}

  ngOnInit(): void {
    if (!this.recipeToShow) {
      throw new Error(
        'You must provide a recipe to RecipeDetailModalContentComponent'
      );
    }
  }
  async onAddRecipe(e: Event) {
    e.stopPropagation();

    const user = await this.auth.getUser();

    if (!user) {
      this.ms.openModal(AuthComponent);
    } else {
      this.ms.openModal(this.addToMenuModalContent);
    }
  }
  closeModal() {
    this.ms.closeModal();
  }
}
