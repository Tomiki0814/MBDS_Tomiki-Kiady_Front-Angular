import {Component} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {ApiService} from "../../../shared/services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal-rendre-assignement',
  templateUrl: './modal-rendre-assignement.component.html',
  styleUrls: ['./modal-rendre-assignement.component.css']
})
export class ModalRendreAssignementComponent {
  idDevoir: any;

  constructor(public modalRef: BsModalRef, private apiservice: ApiService, private router: Router) {
  }

  rendreDevoir() {
    console.log(this.idDevoir)
  }
}
