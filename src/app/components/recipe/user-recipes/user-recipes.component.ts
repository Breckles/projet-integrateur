import { Component, OnInit } from '@angular/core';
import { IRecette } from 'models/recipe.model';
import { RecipeService } from 'services/recipe.service';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.scss'],
})
export class UserRecipesComponent implements OnInit {
  userRecipes: IRecette[] = [];

  constructor(private rs: RecipeService) {}

  ngOnInit(): void {
    this.rs.getUserRecipes().then((recipes) => {
      this.userRecipes = recipes;
    });
  }
}
