export enum Categorie {
  FRUITS_ET_LEGUMES,
  VIANDE,
  CHARCUTERIE,
  PRODUITS_LAITIER,
  BOULANGERIE,
  COLLATION,
  AUTRE,
}

export enum PoidMesure {
  GRAM,
  KILOGRAM,
  MILLILITRE,
  LITRE,
  UNITE,
  TASSE,
  CUILLERE_THE,
  CUILLERE_SOUPE,
}

export interface IArticle {
  nom: string;
  quantite: number;
  categorie: Categorie;
  unites: PoidMesure;
}

export default IArticle;
