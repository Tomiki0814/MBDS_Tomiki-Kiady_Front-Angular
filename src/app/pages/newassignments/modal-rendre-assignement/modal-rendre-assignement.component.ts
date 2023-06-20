import {Component, OnInit} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {ApiService} from "../../../shared/services/api.service";
import {Router} from "@angular/router";
import {Devoir} from "../../../shared/models/Devoir.model";
import {Etudiant} from "../../../shared/models/Etudiant.model";
import {Matiere} from "../../../shared/models/Matiere.modele";

@Component({
  selector: 'app-modal-rendre-assignement',
  templateUrl: './modal-rendre-assignement.component.html',
  styleUrls: ['./modal-rendre-assignement.component.css']
})
export class ModalRendreAssignementComponent implements OnInit{
  idDevoir: any;
  urlDevoir="devoirs/";
  devoir = new Devoir("","", new Etudiant(),new Matiere());
  isLoading= false;
  constructor(public modalRef: BsModalRef, private apiservice: ApiService, private router: Router) {
  }

  rendreDevoir() {
    this.isLoading= true;
    this.devoir.estRendu = true;
    this.apiservice.updateEntity(this.urlDevoir,this.idDevoir,this.devoir).subscribe( data =>{
      this.modalRef.hide();
      this.isLoading= false;
      this.router.navigate(['app/assignments/'+this.idDevoir]);
    })

  }

  ngOnInit(): void {
    this.getDevoir()
  }
  getDevoir(){
    this.apiservice.getEntity(this.urlDevoir+this.idDevoir).subscribe(data => {
      if(data != null && data.length!=0){
        this.devoir = data[0];
      }
    })
  }
}
