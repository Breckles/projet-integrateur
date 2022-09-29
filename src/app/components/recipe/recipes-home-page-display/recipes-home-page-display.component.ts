import { Component, OnInit } from '@angular/core';
import { IRecette } from 'models/recipe.model';
import { RecipeService } from 'services/recipe.service';

@Component({
  selector: 'app-recipes-home-page-display',
  templateUrl: './recipes-home-page-display.component.html',
  styleUrls: ['./recipes-home-page-display.component.scss'],
})
export class RecipesHomePageDisplayComponent implements OnInit {
  recipes: IRecette[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipes.subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}
