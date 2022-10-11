import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthComponent } from 'components/auth/auth.component';
import { IRecette } from 'models/recipe.model';
import { AuthService } from 'services/auth.service';
import { MenuService } from 'services/menu.service';
import { ModalService } from 'services/modal.service';
import { RecipeService } from 'services/recipe.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input()
  recipe!: IRecette;
  @Input()
  date: Date = new Date();

  @Input()
  showAddToMenuButton: boolean = true;
  @Input()
  showModifyButton: boolean = false;
  @Input()
  showDeleteButton: boolean = false;
  @Input()
  showRemoveFromMenuButton: boolean = false;

  @ViewChild('addToMenuModalContent')
  addToMenuModalContent!: TemplateRef<any>;
  @ViewChild('recipeDetailModalContent')
  recipeDetailModalContent!: TemplateRef<any>;
  @ViewChild('modifyRecipeModalContent')
  modifyRecipeModalContent!: TemplateRef<any>;

  constructor(
    private auth: AuthService,
    private ms: ModalService,
    private rs: RecipeService,
    private menuService: MenuService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log(this.showRemoveFromMenuButton);

    if (!this.recipe) {
      throw new Error('You need to provide a recipe for this component');
    }
  }

  onAddRecipe(e: Event) {
    e.stopPropagation();
    this.auth.getUser().then((user) => {
      if (user) {
        this.ms.openModal(this.addToMenuModalContent);
      } else {
        this.ms.openModal<AuthComponent>(AuthComponent);
      }
    });
  }

  onShowDetails() {
    console.log(this.recipeDetailModalContent);
    this.ms.openModal(this.recipeDetailModalContent);
  }

  onModifyRecipe(e: Event) {
    e.stopPropagation();
    this.ms.openModal(this.modifyRecipeModalContent);
  }

  onDeleteRecipe(e: Event) {
    e.stopPropagation();

    if (window.confirm('Etes vous sur de vouloir supprimer cette recette?')) {
      this.rs.deleteRecipe(this.recipe.id).then(() => {
        this.snackbar.open('Succes', '', { duration: 2000 });
      });
    }
  }

  onRemoveRecipeFromMenu(e: Event) {
    e.stopPropagation();
    if (
      window.confirm('Etes vous sur de vouloir enlever cette recette du menu?')
    ) {
      this.menuService.removeRecipeFromMenu(this.recipe, this.date).then(() => {
        this.snackbar.open('Succes', '', { duration: 2000 });
      });
    }
  }
}
