import { Repas } from "./repas";

export interface IMenuJour {
id: string;
menuSemaineId: string;
journee: JourneeSemaine;
repas: Repas[];
}

export enum JourneeSemaine {
    DIMANCHE,
    LUNDI,
    MARDI,
    MERCREDI,
    JEUDI,
    VENDREDI,
    SAMEDI
}