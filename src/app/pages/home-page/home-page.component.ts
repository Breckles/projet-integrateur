import { Component, OnInit } from '@angular/core';
import { IRecette } from 'models/recipe.model';
import { RecipeService } from 'services/recipe.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  recettesVedettes: IRecette[] = [];

  constructor(private rs: RecipeService) {}

  ngOnInit(): void {
    this.rs.recipes.subscribe((recipes) => {
      this.recettesVedettes = recipes;
      console.log(recipes);
    });
  }
}
