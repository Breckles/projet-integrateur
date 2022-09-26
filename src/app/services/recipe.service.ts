import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { IRecette } from 'models/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipeCollection: AngularFirestoreCollection<IRecette>;
  public recipes: Observable<IRecette[]>;

  constructor(private afs: AngularFirestore) {
    this.recipeCollection = this.afs.collection<IRecette>('Recettes');
    this.recipes = this.recipeCollection.valueChanges();
  }

  createRecipe(newRecipe: IRecette) {
    this.recipeCollection.add(newRecipe);
  }
}
