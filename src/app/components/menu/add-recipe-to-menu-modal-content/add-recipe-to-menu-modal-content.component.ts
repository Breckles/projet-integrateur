import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IRecette } from 'models/recipe.model';
import { MenuService } from 'services/menu.service';
import { ModalService } from 'services/modal.service';

@Component({
  selector: 'app-add-recipe-to-menu-modal-content',
  templateUrl: './add-recipe-to-menu-modal-content.component.html',
  styleUrls: ['./add-recipe-to-menu-modal-content.component.scss'],
})
export class AddRecipeToMenuModalContentComponent implements OnInit {
  @Input()
  recipeToAdd!: IRecette;
  dateSelected = new Date();

  constructor(
    private ms: MenuService,
    private modalService: ModalService,
    private sv: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (!this.recipeToAdd) {
      throw new Error(
        'You must provide a recipe to AddRecipeToMenuModalContentComponent.'
      );
    }
  }

  onConfirm() {
    this.ms.addRecipeToMenu(this.recipeToAdd, this.dateSelected).then(() => {
      this.modalService.closeModal();
      this.sv.open('La recette a ete ajoutee a votre menu', undefined, {
        duration: 2000,
      });
    });
  }
}
