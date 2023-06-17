import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Devoir} from "../../../shared/models/Devoir.model";
import {Etudiant} from "../../../shared/models/Etudiant.model";
import {Matiere} from "../../../shared/models/Matiere.modele";

@Component({
  selector: 'app-edit-newassignment',
  templateUrl: './edit-newassignment.component.html',
  styleUrls: ['./edit-newassignment.component.css']
})
export class EditNewassignmentComponent implements OnInit{

  urlEtudiant="all/etudiants";
  urlMatiere="all/matiere";
  urlDevoir="devoirs/";
  urlUpdate="";
  matieres: any[] =[];
  etudiants: any[] = [];
  devoir = new Devoir("","", new Etudiant(),new Matiere());
  id=""
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getListeEtudiant();
    this.getListeMatiere();
    this.getDevoir();
  }

  constructor(private route: ActivatedRoute,private apiservice: ApiService, private router: Router) {
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
  getDevoir(){

    this.apiservice.getEntity(this.urlDevoir+this.id).subscribe(data => {
      if(data != null && data.length!=0){
          this.devoir = data[0];
      }
    })
  }

  editDevoir(){
    this.apiservice.updateEntity(this.urlDevoir,this.id,this.devoir).subscribe( data =>{
      this.router.navigate(['app/assignments/'+this.id]);
    })
  }

}
