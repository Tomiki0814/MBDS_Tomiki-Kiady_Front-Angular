import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-matiere-details',
  templateUrl: './matiere-details.component.html',
  styleUrls: ['./matiere-details.component.css']
})
export class MatiereDetailsComponent implements OnInit {

  url = "findbyMatiere/";
  urlFiltreNote = "devoirs/note/sort/"
  min=0;
  max=20;
  id = ""
  listeDevoirs: any[] = [];
  matiere = ""
  isLoading= true;

  constructor(private route: ActivatedRoute, private apiservice: ApiService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDetailsMatiere()
  }

  getDetailsMatiere() {
    this.isLoading = true;
    this.apiservice.getEntityDetails(this.url, this.id).subscribe(data => {
      this.listeDevoirs = data
      if (data.length != 0) {
        this.matiere = data[0].idMatiere.nom
      }
      this.isLoading = false;
    })

  }
  filtrer() {

    let newUrl = this.urlFiltreNote+this.id+"/"+this.min+"/"+this.max;
    this.apiservice.getEntity(newUrl).subscribe(data => {
      this.listeDevoirs = data
      this.isLoading = false;
    })
  }
}
