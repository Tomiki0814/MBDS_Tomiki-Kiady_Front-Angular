import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";

@Component({
  selector: 'app-add-newassignment',
  templateUrl: './add-newassignment.component.html',
  styleUrls: ['./add-newassignment.component.css']
})
export class AddNewassignmentComponent implements OnInit{
  urlEtudiant="";
  urlMatiere="";

  constructor(private apiservice: ApiService) {
  }
  ngOnInit(): void {
    this.getListeEtudiant();
    this.getListeMatiere();
  }

  getListeEtudiant(){

  }
  getListeMatiere(){

  }
}
