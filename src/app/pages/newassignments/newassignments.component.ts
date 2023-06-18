import {Component, OnInit, TemplateRef} from '@angular/core';
import {AssignmentsService} from 'src/app/shared/services/assignments.service';
import {Assignment} from '../assignements/assignment.model';
import {ApiService} from "../../shared/services/api.service";
import {authGuard} from "../../shared/auth.guard";
import {AuthService} from "../../shared/services/auth.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ModalRendreAssignementComponent} from "./modal-rendre-assignement/modal-rendre-assignement.component";

@Component({
  selector: 'app-newassignments',
  templateUrl: './newassignments.component.html',
  styleUrls: ['./newassignments.component.css']
})
export class NewassignmentsComponent implements OnInit {

  url = "devoirs"
  // propriétés pour la pagination
  page: number=1;
  limit: number=10;
  totalPages: number = 0;
  totalItem:number = 0
  data: any[] = [];
  isAdmin = false;
  modalRef: BsModalRef;
  ngOnInit(): void {
    this.isAdmin = this.guard.isAdmin()
    this.getDevoir();
  }

  constructor(private apiservice: ApiService, private guard: AuthService, private modalService: BsModalService) {
  }

  getDevoir() {
    let newurl = this.url + "?page=" + this.page + "&limit=" + this.limit;
    this.apiservice.getEntity(newurl).subscribe(data => {
      this.data = data.docs;
      this.totalItem = data.totals;
      this.totalPages = this.totalItem % this.limit == 0 ? (this.totalItem / this.limit) : Math.floor(this.totalItem / this.limit) +1;
    })
  }

  // Pour mat-paginator
  handlePage(event: any) {
    this.page = event.pageIndex+1;
    this.limit = event.pageSize;
    this.getDevoir();
  }


  openModal(id:any) {

    this.modalRef = this.modalService.show(ModalRendreAssignementComponent,  {
      initialState: {
        idDevoir: id,
      }
    });

  }
}
