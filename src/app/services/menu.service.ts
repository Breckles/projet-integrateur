import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

import { IMenuJour } from 'models/menu-jour';
import { IRecette } from 'models/recipe.model';
import { IUser } from 'models/user.model';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private appUser: IUser | undefined;
  private menuCollection: AngularFirestoreCollection<IMenuJour>;

  constructor(private afs: AngularFirestore, private auth: AuthService) {
    this.menuCollection = this.afs.collection<IMenuJour>('menu-jour');
    this.auth.appUser.subscribe((user) => {
      this.appUser = user;
    });
  }

  //////////////////// CRUD ///////////////////////

  // C - Create
  async createMenu(date: Date, recettes: IRecette[]) {
    const id = this.afs.createId();
    if (!!this.appUser) {
      const newMenu: IMenuJour = {
        id,
        uid: this.appUser?.uid,
        journee: this.convertDate(date),
        recettes,
      };

      this.menuCollection.doc(id).set(newMenu);
    }
  }

  // R - Read
  async getMenuByDate(date: Date) {
    if (!!this.appUser) {
      const result = await this.menuCollection.ref
        .where('uid', '==', this.appUser.uid)
        .where('journee', '==', this.convertDate(date))
        .get();

      if (result.empty) {
        return null;
      }

      return result.docs[0].data();
    } else {
      return null;
    }
  }

  // U - Update
  async updateMenu(menu: IMenuJour) {
    if (!!this.appUser) {
      const result = await this.menuCollection.ref
        .where('uid', '==', this.appUser.uid)
        .where('journee', '==', menu.journee)
        .get();

      if (!!result.docs[0]) {
        this.menuCollection.ref.doc(result.docs[0].id).set(menu);
      } else {
        this.menuCollection.add(menu);
      }
    }
  }

  async addRecipeToMenu(recipe: IRecette, date: Date) {
    const menu = await this.getMenuByDate(date);

    if (!menu) {
      return this.createMenu(date, [recipe]);
    }

    const newRecipes = menu.recettes;
    newRecipes.push(recipe);

    return this.menuCollection.doc(menu.id).set({
      ...menu,
      recettes: newRecipes,
    });
  }

  // D - Delete

  private convertDate(date: Date) {
    const day = date.getUTCDate();
    const month = date.getUTCMonth();
    const year = date.getUTCFullYear();

    return `${day}-${month}-${year}`;
  }
}
