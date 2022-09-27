import IIngredientRecette from './ingredient-recette.model';
import firebase from 'firebase/compat/app';

export enum TypeRecette {
  ENTREE,
  PRINCIPALE,
  DESSERT,
  COTE,
  AUTRE,
}

export interface IRecette {
  id: string;
  creerPar: string;
  dateCreation: Date | firebase.firestore.FieldValue;
  nom: string;
  image: string;
  nombreServis: number;
  tempPreparation: number;
  tempCuisson: number;
  ingredients: IIngredientRecette[];
  typeRecette: TypeRecette[];
}
