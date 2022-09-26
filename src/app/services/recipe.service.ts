import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { IRecette } from 'models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipeCollection!: AngularFirestoreCollection<IRecette>;

  constructor(private afs: AngularFirestore) {}
}
