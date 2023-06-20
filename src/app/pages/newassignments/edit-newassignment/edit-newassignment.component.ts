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
  devoir = new Devoir("","", new Etudiant(),new Matiere(),10,"");
  id=""
  isLoading= true;
  errorMessage = "";
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
          console.log(this.devoir)
      }
      this.isLoading=false
    })
  }

  editDevoir(){
    this.isLoading =true;
    if(this.devoir.estRendu){
      if(this.devoir.note < 0 || this.devoir.note >20){
        this.errorMessage = "Note doit être compris entre 0 et 20"
        this.isLoading =false;
      }else{
        this.apiservice.updateEntity(this.urlDevoir,this.id,this.devoir).subscribe( data =>{
          this.isLoading =false;
          this.router.navigate(['app/assignments/'+this.id]);
        })
      }
    }else{
      this.apiservice.updateEntity(this.urlDevoir,this.id,this.devoir).subscribe( data =>{
        this.isLoading =false;
        this.router.navigate(['app/assignments/'+this.id]);
      })
    }

  }

}
