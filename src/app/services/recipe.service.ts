import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { IRecette } from 'models/recipe.model';
import { Observable } from 'rxjs';

import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private user: firebase.User | null = null;
  private recipeCollection: AngularFirestoreCollection<IRecette>;
  public recipes: Observable<IRecette[]>;

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.recipeCollection = this.afs.collection<IRecette>('Recettes');
    this.recipes = this.recipeCollection.valueChanges();

    this.auth.user.subscribe((user) => {
      this.user = user;
    });
  }

  createRecipe(newRecipe: Omit<IRecette, 'id' | 'creerPar' | 'dateCreation'>) {
    if (this.user) {
      const recipe = {
        id: this.afs.createId(),
        creerPar: this.user.uid,
        dateCreation: firebase.firestore.FieldValue.serverTimestamp(),
        ...newRecipe,
      };
      this.recipeCollection.doc(recipe.id).set(recipe);
    }
  }
}
