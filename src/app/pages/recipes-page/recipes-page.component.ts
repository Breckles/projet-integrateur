import { Component, OnInit } from '@angular/core';
import { IRecette } from 'models/recipe.model';
import { RecipeService } from 'services/recipe.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss'],
})
export class RecipesPageComponent implements OnInit {
  recipes: IRecette[] = [];

  constructor(private rs: RecipeService) {}

  ngOnInit(): void {
    this.rs.recipes.subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}
