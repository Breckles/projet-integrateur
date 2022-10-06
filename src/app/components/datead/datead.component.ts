import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datead',
  templateUrl: './datead.component.html',
  styleUrls: ['./datead.component.scss']
})
export class DateadComponent implements OnInit {
today: number = Date.now();

  ngOnInit(): void {
  }

}
