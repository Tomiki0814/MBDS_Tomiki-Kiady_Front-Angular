import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.css']
})
export class EtudiantDetailsComponent implements OnInit {

  url="findByEtudiant/";
  id ="648041e5e9d1a2c72ffae682";
  listeDevoirs:any[] = [];
  etudiant ="";

  constructor(private route: ActivatedRoute,private apiservice: ApiService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDevoirEtudiant();
  }


  getDevoirEtudiant(){
    this.apiservice.getEntityDetails(this.url,this.id).subscribe(data=> {
        this.listeDevoirs = data;
        if(data.length!=0){
          this.etudiant = data[0].idEtudiant.nom+" "+data[0].idEtudiant.prenom;
          console.log(data[0])
        }
    })
  }



}
