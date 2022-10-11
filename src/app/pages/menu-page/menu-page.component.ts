import { Component, HostListener, OnInit } from '@angular/core';
import { IMenuJour } from 'models/menu-jour';
import { IRecette } from 'models/recipe.model';
import { MenuService } from 'services/menu.service';
import { RecipeService } from 'services/recipe.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
})
export class MenuPageComponent implements OnInit {
  dayRecipes: IRecette[] = [];
  userRecipes: IRecette[] = [];
  dateSelected: Date = new Date();

  menuRecipesGridColSizes = {
    small: 2,
    medium: 3,
    large: 3,
  };
  userRecipesGridColSizes = {
    small: 2,
    medium: 3,
    large: 6,
  };

  menuRecipesGridCols!: number;
  userRecipesGridCols!: number;

  constructor(private recipeService: RecipeService, private ms: MenuService) {}

  ngOnInit(): void {
    this.ms.getMenuByDate(new Date()).then((menu) => {
      if (!!menu) {
        this.dayRecipes = menu.recettes;
        this.onResize();
      } else {
        this.dayRecipes = [];
      }
    });

    this.recipeService.getUserRecipes().then((recipes) => {
      if (!!recipes) {
        this.userRecipes = recipes;
        this.onResize();
      } else {
        this.userRecipes = [];
      }
    });

    this.onResize();
  }

  onDateSelectedChange(newDate: Date) {
    this.ms.getMenuByDate(newDate).then((menu) => {
      if (!!menu) {
        this.dayRecipes = menu.recettes;
      } else {
        this.dayRecipes = [];
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 500) {
      this.menuRecipesGridCols = this.menuRecipesGridColSizes.small;
      this.userRecipesGridCols = this.userRecipesGridColSizes.small;
    } else if (window.innerWidth < 1140) {
      this.menuRecipesGridCols = this.menuRecipesGridColSizes.medium;
      this.userRecipesGridCols = this.userRecipesGridColSizes.medium;
    } else {
      this.menuRecipesGridCols = this.menuRecipesGridColSizes.large;
      this.userRecipesGridCols = this.userRecipesGridColSizes.large;
    }
  }
}
