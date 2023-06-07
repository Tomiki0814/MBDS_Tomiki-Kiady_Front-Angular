import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AssignmentsComponent} from "./pages/assignements/assignments.component";
import {AddAssignmentComponent} from "./pages/assignements/add-assignment/add-assignment.component";
import {AssignmentDetailComponent} from "./pages/assignements/assignment-detail/assignment-detail.component";
import {EditAssignmentComponent} from "./pages/assignements/edit-assignment/edit-assignment.component";
import {authGuard} from "./shared/auth.guard";
import {LoginComponent} from "./login/login.component";
import { EtudiantComponent } from "./etudiant/etudiant.component";
import { MatiereComponent } from "./matiere/matiere.component";

const routes: Routes = [
  {
    path: '',
    component: AssignmentsComponent
  },
  {
    path: 'home',
    component: AssignmentsComponent
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
    path: 'matiere',
    component: MatiereComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
