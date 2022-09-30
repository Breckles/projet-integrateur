import { Component, OnInit, Input } from '@angular/core';
import { IRecette } from 'models/recipe.model';
import { RecipeService } from 'services/recipe.service';

@Component({
  selector: 'app-recipe-list-display',
  templateUrl: './recipe-list-display.component.html',
  styleUrls: ['./recipe-list-display.component.scss'],
})
export class RecipeListDisplayComponent implements OnInit {
  @Input()
  recipes: IRecette[] = [];

  @Input()
  showButton: boolean = true;

  constructor() {}

  ngOnInit(): void {
    if (!this.recipes) {
      throw new Error(
        'You must provide an array of recipes to RecipeListDisplayComponent'
      );
    }
  }
}
