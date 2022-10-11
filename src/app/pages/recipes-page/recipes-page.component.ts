import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
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

  gridColSizes = {
    small: 2,
    medium: 3,
    large: 5,
  };

  gridCols!: number;

  constructor(private rs: RecipeService) {}

  ngOnInit(): void {
    this.recipesSubscription = this.rs.recipes.subscribe((recipes) => {
      this.recipes = recipes;
    });

    this.onResize();
  }

  ngOnDestroy(): void {
    this.recipesSubscription?.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 500) {
      this.gridCols = this.gridColSizes.small;
    } else if (window.innerWidth < 1140) {
      this.gridCols = this.gridColSizes.medium;
    } else {
      this.gridCols = this.gridColSizes.large;
    }
  }
}
