import { Component, Input, OnInit } from '@angular/core';
import { IRecette, TypeRecette } from 'models/recipe.model';

@Component({
  selector: 'app-repas-home-page-card',
  templateUrl: './repas-home-page-card.component.html',
  styleUrls: ['./repas-home-page-card.component.scss']
})
export class RepasHomePageCardComponent implements OnInit {
  recipes: IRecette[] = [];
  @Input() recipe!: IRecette;
  
  typesRepas: TypeRecette[] = [];
  @Input() typeRepas!: TypeRecette;

  constructor() { }

  ngOnInit(): void {
  }

}
