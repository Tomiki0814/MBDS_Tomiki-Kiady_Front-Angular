import {Etudiant} from "./Etudiant.model";
import {Matiere} from "./Matiere.modele";

export class Devoir {
  _id!: string;
  nom: string
  idEtudiant: Etudiant
  idMatiere: Matiere


  constructor(id: string, nom: string, idEtudiant: Etudiant, idMatiere: Matiere) {
    this._id = id;
    this.nom = nom;
    this.idEtudiant = idEtudiant;
    this.idMatiere = idMatiere;
  }
}

