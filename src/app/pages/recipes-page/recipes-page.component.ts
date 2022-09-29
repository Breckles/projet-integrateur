import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RecipeService } from 'services/recipe.service';

import { IRecette } from 'models/recipe.model';
@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.scss'],
})
export class RecipesPageComponent implements OnInit, OnDestroy {
  recipes: IRecette[] = [];
  private recipesSubscription: Subscription | null = null;

  constructor(private rs: RecipeService) {}

  ngOnInit(): void {
    this.recipesSubscription = this.rs.recipes.subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy(): void {
    this.recipesSubscription?.unsubscribe();
  }
}
