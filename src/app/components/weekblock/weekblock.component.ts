import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekblock',
  templateUrl: './weekblock.component.html',
  styleUrls: ['./weekblock.component.scss']
})
export class WeekblockComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  typesOfDay: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

}
