import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AssignmentsComponent} from "./assignments/assignments.component";
import {AddAssignmentComponent} from "./assignments/add-assignment/add-assignment.component";
import {AssignmentDetailComponent} from "./assignments/assignment-detail/assignment-detail.component";
import {EditAssignmentComponent} from "./assignments/edit-assignment/edit-assignment.component";
import {authGuard} from "./shared/auth.guard";
import {LoginComponent} from "./login/login.component";

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
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
