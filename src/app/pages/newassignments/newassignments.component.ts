import {Component, OnInit} from '@angular/core';
import {AssignmentsService} from 'src/app/shared/services/assignments.service';
import {Assignment} from '../assignements/assignment.model';
import {ApiService} from "../../shared/services/api.service";
import {authGuard} from "../../shared/auth.guard";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-newassignments',
  templateUrl: './newassignments.component.html',
  styleUrls: ['./newassignments.component.css']
})
export class NewassignmentsComponent implements OnInit {

  url = "devoirs"
  page = 1;
  limit = 10;
  data: any[] = [];
  isAdmin = false;

  ngOnInit(): void {
    this.isAdmin = this.guard.isAdmin()
    this.getDevoir();
  }

  constructor(private apiservice: ApiService, private guard: AuthService) {
  }

  getDevoir() {
    let newurl = this.url + "?page=" + this.page + "&limit=" + this.limit;
    this.apiservice.getEntity(newurl).subscribe(data => {
      this.data = data;
    })
  }

}
