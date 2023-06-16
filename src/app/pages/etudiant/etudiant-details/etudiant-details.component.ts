import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";

@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.css']
})
export class EtudiantDetailsComponent implements OnInit {

  url="findByEtudiant/";
  id ="648041e5e9d1a2c72ffae682";
  listeDevoirs:any[] = [];

  constructor(private apiservice: ApiService) {
    this.getDevoirEtudiant();
  }

  ngOnInit(): void {
  }
  getDetailsEtudiant(){
    this.apiservice.getEntityDetails(this.url,this.id).subscribe(data => {

    })
  }

  getDevoirEtudiant(){
    this.apiservice.getEntityDetails(this.url,this.id).subscribe(data=> {
        this.listeDevoirs = data;
    })
  }



}
