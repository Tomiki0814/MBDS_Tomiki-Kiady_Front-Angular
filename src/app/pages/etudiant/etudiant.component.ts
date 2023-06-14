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
  displayedColumns: string[] = [ 'nom','prenom','email','sexe' ];

   // propriétés pour la pagination
   page: number=0;
   limit: number=10;
   totalPages: number = 0;
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
    this.EtudiantService.getEtudiant(this.page, this.limit).subscribe(data => {
      this.etudiants = data.docs;
      this.page = data.page;
      this.limit = data.limit;
      this.totalPages = data.totalDocs;
      
    })
  }

  // Pour mat-paginator
  handlePage(event: any) {
    console.log(event);

    this.page = event.pageIndex;
    this.limit = event.pageSize;
    console.log("numPage="+this.page)
    console.log("limitPage="+this.limit)
    this.getEtudiants();
  }


}
