import { Component, Input, OnInit } from '@angular/core';
import { IRecette } from 'models/recipe.model';

@Component({
  selector: 'app-recipes-article-card',
  templateUrl: './recipes-article-card.component.html',
  styleUrls: ['./recipes-article-card.component.scss'],
})
export class RecipesArticleCardComponent implements OnInit {
  @Input()
  recipe!: IRecette;

  constructor() {}

  ngOnInit(): void {
    if (!this.recipe) {
      throw new Error('You need to provide a recipe for this component');
    }
  }

/*   addThisRecipe(recipe:IRecette){
console.log(recipe);
localStorage.setItem('localStorage', JSON.stringify(recipe));
}
 */
}
