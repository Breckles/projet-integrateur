import { Component, Input, OnInit } from '@angular/core';
import { IRecette, TypeRecette } from 'models/recipe.model';

@Component({
  selector: 'app-type-repas-block',
  templateUrl: './type-repas-block.component.html',
  styleUrls: ['./type-repas-block.component.scss']
})
export class TypeRepasBlockComponent implements OnInit {
  recipes: IRecette[] = [];
  @Input() recipe!: IRecette;
  
  typesRepas: TypeRecette[] = [];
  @Input() typeRepas!: TypeRecette;

  constructor() { }

  ngOnInit(): void {
  }

}
