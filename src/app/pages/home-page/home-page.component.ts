import { Component, HostListener, OnInit } from '@angular/core';
import { IRecette } from 'models/recipe.model';
import { RecipeService } from 'services/recipe.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  recettesVedettes: IRecette[] = [];

  gridColSizes = {
    small: 2,
    medium: 3,
    large: 5,
  };

  gridCols!: number;

  constructor(private rs: RecipeService) {}

  ngOnInit(): void {
    this.rs.recipes.subscribe((recipes) => {
      this.recettesVedettes = recipes;
      console.log(recipes);
    });

    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log('in onResize');

    if (window.innerWidth < 500) {
      console.log('in onResize small');
      this.gridCols = this.gridColSizes.small;
    } else if (window.innerWidth < 1140) {
      console.log('in onResize medium');
      this.gridCols = this.gridColSizes.medium;
    } else {
      console.log('in onResize large');
      this.gridCols = this.gridColSizes.large;
    }
  }
}
