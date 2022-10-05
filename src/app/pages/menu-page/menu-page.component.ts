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
    small: 1,
    medium: 3,
    large: 5,
  };
  userRecipesGridColSizes = {
    small: 1,
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
        this.menuRecipesGridColSizes.small = menu.recettes.length;
        this.onResize();
      } else {
        this.dayRecipes = [];
      }
    });

    this.recipeService.getUserRecipes().then((recipes) => {
      if (!!recipes) {
        this.userRecipes = recipes;
        this.userRecipesGridColSizes.small = recipes.length;
        this.onResize();
      } else {
        this.userRecipes = [];
      }
    });

    this.onResize();
  }

  onDateSelectedChange(newDate: Date) {
    console.log('Selected date has changed: ' + newDate.toISOString());
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
    console.log('in onResize');

    if (window.innerWidth < 500) {
      console.log('in onResize small');
      this.menuRecipesGridCols = this.menuRecipesGridColSizes.small;
      this.userRecipesGridCols = this.userRecipesGridColSizes.small;
    } else if (window.innerWidth < 1140) {
      console.log('in onResize medium');
      this.menuRecipesGridCols = this.menuRecipesGridColSizes.medium;
      this.userRecipesGridCols = this.userRecipesGridColSizes.medium;
    } else {
      console.log('in onResize large');
      this.menuRecipesGridCols = this.menuRecipesGridColSizes.large;
      this.userRecipesGridCols = this.userRecipesGridColSizes.large;
    }
  }
}
