import { IRecette } from "./recipe.model";

export interface IMenuJour {
id: string;
uid: string;
journee: Date;
recettes: IRecette[];
}
