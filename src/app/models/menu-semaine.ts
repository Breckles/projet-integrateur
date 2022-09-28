import { MenuJour } from "./menu-jour";


export interface MenuSemaine {
    id: string;
    uid: string;
    debutSemaine: Date;
    menuJours: MenuJour[];
}