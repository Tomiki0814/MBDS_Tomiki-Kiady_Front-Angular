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
  devoir = new Devoir("","", new Etudiant(),new Matiere());
  isAdmin=false;
  isLoading=false;
  constructor(private route: ActivatedRoute,private apiservice: ApiService, private guard:AuthService,private router: Router) {
  }
  ngOnInit(): void {
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
    this.apiservice.DeleteEntity(this.url, this.id).subscribe( data =>{
      this.router.navigate(['']);
    })
  }
}
