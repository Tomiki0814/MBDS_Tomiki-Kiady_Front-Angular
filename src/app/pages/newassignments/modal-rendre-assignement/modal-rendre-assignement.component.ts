import { Component } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-modal-rendre-assignement',
  templateUrl: './modal-rendre-assignement.component.html',
  styleUrls: ['./modal-rendre-assignement.component.css']
})
export class ModalRendreAssignementComponent {
  title:any;

  constructor(public modalRef: BsModalRef) {
  }
}
