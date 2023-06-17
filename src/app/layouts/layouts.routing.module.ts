import {Routes} from "@angular/router";
import {NewassignmentsComponent} from "../pages/newassignments/newassignments.component";
import {AddNewassignmentComponent} from "../pages/newassignments/add-newassignment/add-newassignment.component";
import {authGuard} from "../shared/auth.guard";
import {EditNewassignmentComponent} from "../pages/newassignments/edit-newassignment/edit-newassignment.component";
import {NewassignementDetailsComponent} from "../pages/newassignments/newassignement-details/newassignement-details.component";
import {AddAssignmentComponent} from "../pages/assignements/add-assignment/add-assignment.component";
import {AssignmentDetailComponent} from "../pages/assignements/assignment-detail/assignment-detail.component";
import {EditAssignmentComponent} from "../pages/assignements/edit-assignment/edit-assignment.component";
import {EtudiantComponent} from "../pages/etudiant/etudiant.component";
import {EtudiantDetailsComponent} from "../pages/etudiant/etudiant-details/etudiant-details.component";
import {MatiereComponent} from "../pages/matiere/matiere.component";
import {MatiereDetailsComponent} from "../pages/matiere/matiere-details/matiere-details.component";

export const AdminLayoutRoutes: Routes = [

  {path: '', redirectTo: 'assignments', pathMatch: 'full'},
  {
    path: 'assignments',
    component: NewassignmentsComponent
  },
  {
    path: 'assignments/add',
    component: AddNewassignmentComponent,
    canActivate: [authGuard]
  },
  {
    path: 'assignments/edit/:id',
    component: EditNewassignmentComponent,
    canActivate: [authGuard]
  },
  {
    path: 'assignments/:id',
    component: NewassignementDetailsComponent
  },


  {
    path: 'add',
    component: AddAssignmentComponent
  },
  {
    path: 'assignments/:id',
    component: AssignmentDetailComponent
  },
  {
    path: 'assignments/:id/edit',
    component: EditAssignmentComponent,
    canActivate: [authGuard]
  },

  {
    path: 'etudiant',
    component: EtudiantComponent
  },
  {
    path: 'etudiant/:id',
    component: EtudiantDetailsComponent
  },
  {
    path: 'matiere',
    component: MatiereComponent
  },
  {
    path: 'matiere/:id',
    component: MatiereDetailsComponent
  }
];
