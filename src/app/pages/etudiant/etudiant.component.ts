import {Component, OnInit} from '@angular/core';
import {Etudiant} from "./etudiant.model";
import {ApiService} from "../../shared/services/api.service";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  url="etudiants";
  etudiants:Etudiant[] = [];
  displayedColumns: string[] = [ 'nom','prenom','email','sexe' ];

   // propriétés pour la pagination
   page: number=0;
   limit: number=10;
   totalPages: number = 0;
  constructor(private apiservice: ApiService) {
  }

  ngOnInit(): void {

    this.getEtudiants();
  }

  getEtudiants(){

    let newurl = this.url + "?page=" + this.page + "&limit=" + this.limit;
    console.log(newurl)
    this.apiservice.getEntity(newurl).subscribe(data => {
      this.etudiants = data.docs;
      this.page = data.page;
      this.limit = data.limit;
      this.totalPages = data.totalDocs;

    })
  }

  // Pour mat-paginator
  handlePage(event: any) {
    this.page = event.pageIndex;
    this.limit = event.pageSize;
    this.getEtudiants();
  }


}
