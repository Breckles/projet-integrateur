import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calendar-block',
  templateUrl: './calendar-block.component.html',
  styleUrls: ['./calendar-block.component.scss']
})
export class CalendarBlockComponent implements OnInit {
  panelOpenState = false;
  selected = new Date()

  constructor() { }
  
  ngOnInit() {
  }



}
