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
  id = ""
  listeDevoirs: any[] = [];
  matiere = ""

  constructor(private route: ActivatedRoute, private apiservice: ApiService) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDetailsMatiere()
  }

  getDetailsMatiere() {
    this.apiservice.getEntityDetails(this.url, this.id).subscribe(data => {
      this.listeDevoirs = data
      if (data.length != 0) {
        this.matiere = data[0].idMatiere.nom
      }

    })

  }

}
