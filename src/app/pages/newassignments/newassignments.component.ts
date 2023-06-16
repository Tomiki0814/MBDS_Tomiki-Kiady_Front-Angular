import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/services/assignments.service';
import { Assignment } from '../assignements/assignment.model';
import {ApiService} from "../../shared/services/api.service";

@Component({
  selector: 'app-newassignments',
  templateUrl: './newassignments.component.html',
  styleUrls: ['./newassignments.component.css']
})
export class NewassignmentsComponent implements OnInit {

  url="devoirs"
  page = 1;
  limit = 10;
  data :any[] = [];
  ngOnInit(): void {
    this.getDevoir();
  }

  constructor(private apiservice: ApiService) {
  }
  getDevoir(){
    let newurl = this.url + "?page=" + this.page + "&limit=" + this.limit;
    this.apiservice.getEntity(newurl).subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }
}
