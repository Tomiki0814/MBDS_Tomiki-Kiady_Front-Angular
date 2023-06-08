import {Component, OnInit} from '@angular/core';
import {EtudiantsService} from "../../shared/etudiants.service";
import {Etudiant} from "../etudiant/etudiant.model";
import {Matiere} from "./matiere.model";
import {MatiereService} from "../../shared/matiere.service";

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit  {

  matieres:Matiere[] = [];
  ngOnInit(): void {
    console.log("OnInit Composant instancié et juste avant le rendu HTML (le composant est visible dans la page HTML)");
    // exercice : regarder si il existe des query params
    // page et limit, récupérer leur valeurs si elles existent
    // et les passer à la méthode getAssignments
    // TODO
    this.getMatieres();
  }
  constructor(private MatiereService:MatiereService) {
  }
  getMatieres(){
    this.MatiereService.getMatiere().subscribe(data => {
      this.matieres = data.docs;
      console.log(data.docs);
    })
  }
}
