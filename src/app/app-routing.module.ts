import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AssignmentsComponent} from "./pages/assignements/assignments.component";
import {AddAssignmentComponent} from "./pages/assignements/add-assignment/add-assignment.component";
import {AssignmentDetailComponent} from "./pages/assignements/assignment-detail/assignment-detail.component";
import {EditAssignmentComponent} from "./pages/assignements/edit-assignment/edit-assignment.component";
import {authGuard} from "./shared/auth.guard";
import {LoginComponent} from "./login/login.component";
import {EtudiantComponent} from "./pages/etudiant/etudiant.component";
import {MatiereComponent} from "./pages/matiere/matiere.component";
import {NewassignmentsComponent} from "./pages/newassignments/newassignments.component";
import {AddNewassignmentComponent} from "./pages/newassignments/add-newassignment/add-newassignment.component";
import {
  NewassignementDetailsComponent
} from "./pages/newassignments/newassignement-details/newassignement-details.component";
import {EtudiantDetailsComponent} from "./pages/etudiant/etudiant-details/etudiant-details.component";
import {MatiereDetailsComponent} from "./pages/matiere/matiere-details/matiere-details.component";
import {EditNewassignmentComponent} from "./pages/newassignments/edit-newassignment/edit-newassignment.component";

const routes: Routes = [

  {path: '', redirectTo: '/assignments', pathMatch: 'full'},
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
    path: 'login',
    component: LoginComponent
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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
