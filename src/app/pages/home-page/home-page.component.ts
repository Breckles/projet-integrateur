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
    });

    this.onResize();
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
