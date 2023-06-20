import {Etudiant} from "./Etudiant.model";
import {Matiere} from "./Matiere.modele";

export class Devoir {
  _id!: string;
  nom: string
  idEtudiant: Etudiant
  idMatiere: Matiere
  dateRendu: Date
  note: number
  remarque:string
  estRendu:boolean


  constructor(id: string, nom: string, idEtudiant: Etudiant, idMatiere: Matiere,note:number,remarque:string) {
    this._id = id;
    this.nom = nom;
    this.idEtudiant = idEtudiant;
    this.idMatiere = idMatiere;
    this.note = note;
    this.remarque = remarque;
  }
}

