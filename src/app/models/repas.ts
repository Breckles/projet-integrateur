import { IRecette } from "./recipe.model";

export interface Repas {
    typeRepas: TypeRepas;
    recettes: IRecette[];
    }
    
    export enum TypeRepas {
        DEJEUNER,
        DINER,
        SOUPER,
        COLLATION
    }