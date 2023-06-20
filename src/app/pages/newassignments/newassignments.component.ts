import {Component, OnInit, TemplateRef} from '@angular/core';
import {AssignmentsService} from 'src/app/shared/services/assignments.service';
import {Assignment} from '../assignements/assignment.model';
import {ApiService} from "../../shared/services/api.service";
import {authGuard} from "../../shared/auth.guard";
import {AuthService} from "../../shared/services/auth.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ModalRendreAssignementComponent} from "./modal-rendre-assignement/modal-rendre-assignement.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-newassignments',
  templateUrl: './newassignments.component.html',
  styleUrls: ['./newassignments.component.css']
})
export class NewassignmentsComponent implements OnInit {

  url = "devoirs"
  urlSort="devoirs/sort/"
  listeFiltre=[{key:"Tous",value:0},{key:"Déja Rendue",value:1},{key:"A rendre",value:2}]
  selectedId=0;

  // propriétés pour la pagination
  page: number=1;
  limit: number=10;
  totalPages: number = 0;
  totalItem:number = 0
  data: any[] = [];
  modalRef: BsModalRef;
  isLoading = true;
  ngOnInit(): void {
    this.filtrer();
  }

  constructor(private apiservice: ApiService, private guard: AuthService, private modalService: BsModalService, private router: Router) {
  }

  getDevoir() {
    let newurl = this.url + "?page=" + this.page + "&limit=" + this.limit;
    this.apiservice.getEntity(newurl).subscribe(data => {
      this.data = data.docs;
      this.totalItem = data.totals;
      this.totalPages = this.totalItem % this.limit == 0 ? (this.totalItem / this.limit) : Math.floor(this.totalItem / this.limit) +1;
      this.isLoading = false;

    })
  }
  filterByStatus(filter:boolean){
    let newurl = this.urlSort+filter + "?page=" + this.page + "&limit=" + this.limit;
    this.apiservice.getEntity(newurl).subscribe(data => {
      this.data = data.docs;
      this.totalItem = data.totals;
      this.totalPages = this.totalItem % this.limit == 0 ? (this.totalItem / this.limit) : Math.floor(this.totalItem / this.limit) +1;
      this.isLoading = false;
    })
  }

  // Pour mat-paginator
  handlePage(event: any) {
    this.page = event.pageIndex+1;
    this.limit = event.pageSize;
    this.filtrer();
  }


  openModal(id:any) {

    this.modalRef = this.modalService.show(ModalRendreAssignementComponent,  {
      initialState: {
        idDevoir: id,
      }
    });

  }

  filtrer() {
    if(this.selectedId ==0){
      this.getDevoir();
    }else{
      let filtre = this.selectedId ==1 ? true : false;
      this.filterByStatus(filtre)
    }
  }


}
