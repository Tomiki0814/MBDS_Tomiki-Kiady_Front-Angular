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
import {LayoutsComponent} from "./layouts/layouts.component";

const routes: Routes = [

  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {
    path: "app",
    component: LayoutsComponent,
    children: [
      {
        path: "",
        loadChildren: () => import ("./layouts/layouts.module").then(m => m.LayoutsModule)
      }
    ]
  },

  {
    path: 'login',
    component: LoginComponent
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
