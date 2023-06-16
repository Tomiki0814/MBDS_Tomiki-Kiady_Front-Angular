import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {Devoir} from "../../../shared/models/Devoir.model";
import {Matiere} from "../../../shared/models/Matiere.modele";
import {Etudiant} from "../../../shared/models/Etudiant.model";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-newassignement-details',
  templateUrl: './newassignement-details.component.html',
  styleUrls: ['./newassignement-details.component.css']
})
export class NewassignementDetailsComponent implements OnInit{

  url="devoirs/";
  id=""
  devoir = new Devoir("","", new Etudiant(),new Matiere());
  constructor(private route: ActivatedRoute,private apiservice: ApiService) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData()

  }

  getData(){
    this.apiservice.getEntityDetails(this.url, this.id).subscribe( data =>{
        if(data!=null && data.length!=0){
          this.devoir = data[0]
        }
    })
  }

  deleteDevoir() {
    this.apiservice.DeleteEntity(this.url, this.id).subscribe( data =>{

    })
  }
}
