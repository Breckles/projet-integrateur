import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { IRecette } from 'models/recipe.model';
import { Observable } from 'rxjs';

import firebase from 'firebase/compat/app';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipeCollection: AngularFirestoreCollection<IRecette>;
  public recipes: Observable<IRecette[]>;

  constructor(private afs: AngularFirestore, private auth: AuthService) {
    this.recipeCollection = this.afs.collection<IRecette>('Recettes');
    this.recipes = this.recipeCollection.valueChanges();
  }

  async createRecipe(
    newRecipe: Omit<IRecette, 'id' | 'creerPar' | 'dateCreation'>
  ) {
    const appUser = await this.auth.getUser();

    if (appUser) {
      const recipe = {
        id: this.afs.createId(),
        creerPar: appUser.uid,
        dateCreation: firebase.firestore.FieldValue.serverTimestamp(),
        ...newRecipe,
      };
      this.recipeCollection.doc(recipe.id).set(recipe);
    }
  }

  async updateRecipe(recipe: IRecette) {
    return this.recipeCollection.doc(recipe.id).set(recipe);
  }

  async getUserRecipes() {
    const appUser = await this.auth.getUser();

    const userRecipes: IRecette[] = [];

    if (appUser) {
      const result = await this.recipeCollection.ref
        .where('creerPar', '==', appUser.uid)
        .get();

      for (const snapshot of result.docs) {
        userRecipes.push(snapshot.data());
      }
    }

    return userRecipes;
  }

  deleteRecipe(id: string) {
    return this.recipeCollection.doc(id).delete();
  }
}
