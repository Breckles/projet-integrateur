import {IMenuJour } from "./menu-jour";


export interface IMenuSemaine {
    id: string;
    uid: string;
    debutSemaine: Date;
    menuJours: IMenuJour[];
}