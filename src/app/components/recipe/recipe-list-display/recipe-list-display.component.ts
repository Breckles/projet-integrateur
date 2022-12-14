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
  date = new Date();
  @Input()
  showAddToMenuButton: boolean = true;
  @Input()
  showModifyButton: boolean = false;
  @Input()
  showDeleteButton: boolean = false;
  @Input()
  showRemoveFromMenuButton: boolean = false;

  @Input()
  columns!: number;
  @Input()
  rowHeight: string | number = '1:1';

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
    if (changes['columns']) {
      this.columns = changes['columns'].currentValue;
    }

    if (changes['rowHeight']) {
      this.rowHeight = changes['rowHeight'].currentValue;
    }
  }
}
