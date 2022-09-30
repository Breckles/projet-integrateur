import { Component, OnInit } from '@angular/core';
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
  dateSelected: Date = new Date();

  constructor(private recipeService: RecipeService, private ms: MenuService) {}

  ngOnInit(): void {
    this.ms.getMenuByDate(new Date()).then((menu) => {
      if (!!menu) {
        this.dayRecipes = menu.recettes;
      } else {
        this.dayRecipes = [];
      }
    });
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
}
