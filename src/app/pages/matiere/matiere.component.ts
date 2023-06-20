import {Component, OnInit} from '@angular/core';
import {Matiere} from "./matiere.model";
import {ApiService} from "../../shared/services/api.service";

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit  {


  url="all/matiere"
  matieres:Matiere[] = [];
  isLoading=true;
  ngOnInit(): void {
    this.getMatieres();
  }
  constructor(private apiservice: ApiService) {
  }
  getMatieres(){
    this.apiservice.getEntity(this.url).subscribe(data => {
      this.matieres = data;
      this.isLoading = false
    })
  }
}
