import { Categorie, PoidMesure } from './article.model';

export interface IIngredientRecette {
  nom: string;
  preparation: string;
  quantite: number;
  unites: PoidMesure;
  categorie: Categorie;
}

export default IIngredientRecette;
