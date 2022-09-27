import { Component, OnInit } from '@angular/core';
import { IRecette } from 'models/recipe.model';
import { RecipeService } from 'services/recipe.service';

@Component({
  selector: 'app-recipes-card-block',
  templateUrl: './recipes-card-block.component.html',
  styleUrls: ['./recipes-card-block.component.scss'],
})
export class RecipesCardBlockComponent implements OnInit {
  recipes: IRecette[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipes.subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}
