import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/api.service";

@Component({
  selector: 'app-matiere-details',
  templateUrl: './matiere-details.component.html',
  styleUrls: ['./matiere-details.component.css']
})
export class MatiereDetailsComponent implements OnInit{

  url="http://localhost:8010/api/findbyMatiere/648044cfe9d1a2c72fffeac0";
  id=""
  listeDevoirs:any[] =[];
  constructor(private apiservice: ApiService) {

  }
  ngOnInit(): void {
    this.getDetailsMatiere()
  }

  getDetailsMatiere(){
  this.apiservice.getEntityDetails(this.url,this.id).subscribe(data => {
    this.listeDevoirs = data
  })

  }

  getDevoirMatiere(){
    this.apiservice.getEntityDetails(this.url,this.id).subscribe(data => {

    })
    console.log("tes");
  }
}
