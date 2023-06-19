import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import { FormsModule } from '@angular/forms';
import {Router} from "@angular/router";


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
  // newDateRendu: Date
  devoir = {idEtudiant:"",idMatiere:"",dateRendu:"",estRendu:false}
  url="devoirs";
  constructor(private apiservice: ApiService, private router: Router) {
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
    // this.devoir.dateRendu = new Date(this.newDateRendu).toLocaleDateString("fr");

    this.apiservice.addEntity(this.url, this.devoir).subscribe( data =>{
      this.router.navigate(['']);
    })
    // console.log(this.devoir);

  }
}
