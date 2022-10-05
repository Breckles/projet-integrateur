import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IRecette } from 'models/recipe.model';

@Component({
  selector: 'app-recipe-list-display',
  templateUrl: './recipe-list-display.component.html',
  styleUrls: ['./recipe-list-display.component.scss'],
})
export class RecipeListDisplayComponent implements OnInit, OnChanges {
  @Input()
  recipes: IRecette[] = [];
  @Input()
  showAddToMenuButton: boolean = true;
  @Input()
  showModifyButton: boolean = false;

  @Input()
  columns!: number;

  gridCols!: number;

  constructor() {}

  ngOnInit(): void {
    if (!this.recipes) {
      throw new Error(
        'You must provide an array of recipes to RecipeListDisplayComponent'
      );
    }
    if (!this.columns) {
      throw new Error(
        'You must provide a value for columns of the RecipeListDisplayComponent'
      );
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('in ngOnChanges');
    console.log(changes['columns']);

    if (changes['columns']) {
      this.columns = changes['columns'].currentValue;
    }
  }
}
