import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-newassignment',
  templateUrl: './add-newassignment.component.html',
  styleUrls: ['./add-newassignment.component.css']
})
export class AddNewassignmentComponent implements OnInit{
  urlEtudiant="all/etudiants";
  urlMatiere="all/matiere";
  matieres: any[] =[];
  etudiants: any[] = [];
  devoir = {idEtudiant:"",idMatiere:""}
  url="devoirs";
  constructor(private apiservice: ApiService) {
  }
  ngOnInit(): void {
    this.getListeEtudiant();
    this.getListeMatiere();
  }

  getListeEtudiant(){
    this.apiservice.getEntity(this.urlEtudiant).subscribe(data => {
      this.etudiants = data;
    })
  }
  getListeMatiere(){
    this.apiservice.getEntity(this.urlMatiere).subscribe(data => {
      this.matieres = data;
    })
  }

  ajouter(){
    this.apiservice.addEntity(this.url, this.devoir).subscribe( data =>{

    })
    console.log(this.devoir)
  }
}
