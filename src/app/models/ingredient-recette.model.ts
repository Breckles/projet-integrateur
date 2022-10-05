import { Categorie, PoidMesure } from './article.model';

export interface IIngredientRecette {
  nom: string;
  preparation: string;
  quantite: number;
  unites: number;
  categorie: number;
}

export default IIngredientRecette;
