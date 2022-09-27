import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-block',
  templateUrl: './calendar-block.component.html',
  styleUrls: ['./calendar-block.component.scss'],
})
export class CalendarBlockComponent implements OnInit {
  panelOpenState = false;
  selected = new Date();

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

  constructor() {}

  ngOnInit() {
    this.handleResize();
  }

  @HostListener('window:resize')
  handleResize() {
    console.log('in handle resize');

    const windowSize = window.innerWidth;
    console.log(windowSize);

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
      this.gridCols = 4;

      // Calendar grid tile
      this.calendarTileColSpan = 2;
      this.calendarTileRowSpan = 1;

      // Day/Week grid tile
      this.dayWeekTileColSpan = 2;
      this.dayWeekTileRowSpan = 1;

      // 'Add recipe button' grid tile
      this.addRecipeBtnTileColSpan = 1;
      this.addRecipeBtnTileRowSpan = 1;

      // Menu grid tile
      this.menuTileColSpan = 3;
      this.menuTileRowSpan = 1;
    }
  }
}
