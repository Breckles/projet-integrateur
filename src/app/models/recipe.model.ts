import IIngredientRecette from './ingredient-recette.model';

export enum TypeRecette {
  ENTREE,
  PRINCIPALE,
  DESSERT,
  COTE,
  AUTRE,
}

export class Recette {
  constructor(
    private id: string,
    private nom: string,
    private image: string,
    private nombreServis: number,
    private tempPreparation: number,
    private tempCuisson: number,
    private ingredients: IIngredientRecette[],
    private creerPar: string,
    private dateCreation: Date,
    private typeRecette: TypeRecette[]
  ) {}
}
