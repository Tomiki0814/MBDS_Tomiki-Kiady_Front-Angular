import {Component, OnInit} from '@angular/core';
import {AssignmentsService} from "../../shared/assignments.service";
import {EtudiantsService} from "../../shared/etudiants.service";
import {Assignment} from "../assignements/assignment.model";
import {Etudiant} from "./etudiant.model";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  etudiants:Etudiant[] = [];
  constructor(private EtudiantService:EtudiantsService) {
  }

  ngOnInit(): void {
    console.log("OnInit Composant instancié et juste avant le rendu HTML (le composant est visible dans la page HTML)");
    // exercice : regarder si il existe des query params
    // page et limit, récupérer leur valeurs si elles existent
    // et les passer à la méthode getAssignments
    // TODO

    this.getEtudiants();
  }

  getEtudiants(){
    this.EtudiantService.getEtudiant().subscribe(data => {
      this.etudiants = data.docs;
      console.log(data);
    })
  }


}
