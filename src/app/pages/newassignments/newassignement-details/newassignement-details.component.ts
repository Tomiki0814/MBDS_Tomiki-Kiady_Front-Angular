import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {Devoir} from "../../../shared/models/Devoir.model";
import {Matiere} from "../../../shared/models/Matiere.modele";
import {Etudiant} from "../../../shared/models/Etudiant.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../shared/services/auth.service";


@Component({
  selector: 'app-newassignement-details',
  templateUrl: './newassignement-details.component.html',
  styleUrls: ['./newassignement-details.component.css']
})
export class NewassignementDetailsComponent implements OnInit{

  url="devoirs/";
  id=""
  urlAnnuler = "devoirs/annuler/";
  devoir = new Devoir("","", new Etudiant(),new Matiere(),10,"");
  isAdmin=false;
  isLoading=false;
  constructor(private route: ActivatedRoute,private apiservice: ApiService, private guard:AuthService,private router: Router) {
  }
  ngOnInit(): void {
    this.isAdmin = this.guard.isAdmin();
    this.id = this.route.snapshot.params['id'];
    this.getData()

  }

  getData(){
    this.isLoading=true;
    this.apiservice.getEntityDetails(this.url, this.id).subscribe( data =>{
        if(data!=null && data.length!=0){
          this.devoir = data[0]
        }
        this.isLoading=false;
    })
  }

  deleteDevoir() {
    this.isLoading=true;
    this.apiservice.DeleteEntity(this.url, this.id).subscribe( data =>{
      this.isLoading=false;
      this.router.navigate(['']);
    })
  }

    AnnulerDevoir(url: string, id: string, entity: any) {
    this.isLoading = true;
    this.apiservice.updateEntity(url, id, entity).subscribe(object => {
      this.isLoading = false;
      this.router.navigate(['app/assignments']);
    })
  }

  annuler() {
    this.AnnulerDevoir(this.urlAnnuler,this.id,this.devoir);
  }

}
