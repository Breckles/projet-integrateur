import { Component, OnInit } from '@angular/core';
import { IRecette } from 'models/recipe.model';
import { RecipeService } from 'services/recipe.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
})
export class MenuPageComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}


  
  ngOnInit(): void {
    this.recipeService.recipes.subscribe((data: IRecette[]) => {
      console.log(data);
    });
  }
}
