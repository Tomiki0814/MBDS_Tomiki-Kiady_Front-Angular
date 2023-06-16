import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/services/assignments.service';
import { Assignment } from '../assignements/assignment.model';

@Component({
  selector: 'app-newassignments',
  templateUrl: './newassignments.component.html',
  styleUrls: ['./newassignments.component.css']
})
export class NewassignmentsComponent implements OnInit {

  page = 1;
  limit = 10;
  data :Assignment[] = [];
  ngOnInit(): void {
    console.log("OnInit Composant instancié et juste avant le rendu HTML (le composant est visible dans la page HTML)");
    // exercice : regarder si il existe des query params
    // page et limit, récupérer leur valeurs si elles existent
    // et les passer à la méthode getAssignments
    // TODO
    this.getDevoir();
  }

  constructor(private assignementService:AssignmentsService) {
  }
  getDevoir(){
    this.assignementService.getAssignments(this.page,this.limit).subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }
}
