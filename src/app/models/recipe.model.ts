import IIngredientRecette from './ingredient-recette.model';

export enum TypeRecette {
  ENTREE,
  PRINCIPALE,
  DESSERT,
  COTE,
  AUTRE,
}

export interface IRecette {
  id: string;
  nom: string;
  image: string;
  nombreServis: number;
  tempPreparation: number;
  tempCuisson: number;
  ingredients: IIngredientRecette[];
  creerPar: string;
  dateCreation: Date;
  typeRecette: TypeRecette[];
}
