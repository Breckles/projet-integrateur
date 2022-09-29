import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IRecette, TypeRecette } from 'models/recipe.model';
import { RecipeService } from 'services/recipe.service';

@Component({
  selector: 'app-calendar-block',
  templateUrl: './calendar-block.component.html',
  styleUrls: ['./calendar-block.component.scss'],
})
export class CalendarBlockComponent implements OnInit {
  panelOpenState = false;
  selected = new Date();
  recipes: IRecette[] = [];

  @Input() recipe!: IRecette;

//size for mobile
  gridCols = 1;

  calendarTileColSpan = 1;
  calendarTileRowSpan = 1;

  // Day/Week grid tile
  dayWeekTileColSpan = 1;
  dayWeekTileRowSpan = 1;

  // 'Add recipe button' grid tile
  addRecipeBtnTileColSpan = 1;
  addRecipeBtnTileRowSpan = 1;

  // Menu grid tile
  menuTileColSpan = 1;
  menuTileRowSpan = 1;

  constructor(private recipeService: RecipeService) {}

  ngOnInit():void {
    this.handleResize();
    this.recipeService.recipes.subscribe((recipes)=>{
      this.recipes = recipes;
    });
  }

  @HostListener('window:resize')
  handleResize() {
    console.log('in handle resize');

    const windowSize = window.innerWidth;
    console.log(windowSize);

//size for mobile/tablet
    if (windowSize < 700) {
      this.gridCols = 1;

      // Calendar grid tile
      this.calendarTileColSpan = 1;
      this.calendarTileRowSpan = 1;

      // Day/Week grid tile
      this.dayWeekTileColSpan = 1;
      this.dayWeekTileRowSpan = 1;

      // 'Add recipe button' grid tile
      this.addRecipeBtnTileColSpan = 1;
      this.addRecipeBtnTileRowSpan = 1;

      // Menu grid tile
      this.menuTileColSpan = 1;
      this.menuTileRowSpan = 1;
    } else {
      //size for desktop
      this.gridCols = 2;

      // step 1 - Calendar grid tile
      this.calendarTileColSpan = 1;
      this.calendarTileRowSpan = 3;

      // step 2 - Day/Week grid tile
      this.dayWeekTileColSpan = 1;
      this.dayWeekTileRowSpan = 1;

      // step 3 - 'Add recipe button' grid tile
      this.addRecipeBtnTileColSpan = 1;
      this.addRecipeBtnTileRowSpan = 1;

      // step 4 - Menu Result grid tile
      this.menuTileColSpan = 1;
      this.menuTileRowSpan = 1;
    }
  }
}
