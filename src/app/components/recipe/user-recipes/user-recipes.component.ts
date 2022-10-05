import { Component, Input, OnInit } from '@angular/core';
import { IRecette } from 'models/recipe.model';
import { RecipeService } from 'services/recipe.service';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.scss'],
})
export class UserRecipesComponent implements OnInit {
  @Input()
  columns!: number;
  userRecipes: IRecette[] = [];

  constructor(private rs: RecipeService) {}

  ngOnInit(): void {
    if (!this.columns) {
      throw new Error(
        'You must provide a value for columns of UserRecipesComponent'
      );
    }
    this.rs.getUserRecipes().then((recipes) => {
      this.userRecipes = recipes;
      if (!this.columns) {
      }
      this.columns = this.userRecipes.length;
    });
  }
}
