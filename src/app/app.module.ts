import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import {DragDropModule} from '@angular/cdk/drag-drop';

import { AssignmentsComponent } from './pages/assignements/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { AssignmentDetailComponent } from './pages/assignements/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './pages/assignements/add-assignment/add-assignment.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { EditAssignmentComponent } from './pages/assignements/edit-assignment/edit-assignment.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import { MatiereComponent } from './pages/matiere/matiere.component';
import { EtudiantComponent } from './pages/etudiant/etudiant.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { NewassignmentsComponent } from './pages/newassignments/newassignments.component';
import { EtudiantDetailsComponent } from './pages/etudiant/etudiant-details/etudiant-details.component';
import { MatiereDetailsComponent } from './pages/matiere/matiere-details/matiere-details.component';
import { AddNewassignmentComponent } from './pages/newassignments/add-newassignment/add-newassignment.component';
import { NewassignementDetailsComponent } from './pages/newassignments/newassignement-details/newassignement-details.component';
import { EditNewassignmentComponent } from './pages/newassignments/edit-newassignment/edit-newassignment.component';
import { LayoutsComponent } from './layouts/layouts.component';
import {ModalModule} from "ngx-bootstrap/modal";
import { ModalRendreAssignementComponent } from './pages/newassignments/modal-rendre-assignement/modal-rendre-assignement.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    LoginComponent,
    MatiereComponent,
    EtudiantComponent,
    NavbarComponent,
    SidebarComponent,
    NewassignmentsComponent,
    EtudiantDetailsComponent,
    MatiereDetailsComponent,
    AddNewassignmentComponent,
    NewassignementDetailsComponent,
    EditNewassignmentComponent,
    LayoutsComponent,
    ModalRendreAssignementComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule, ScrollingModule,
    MatButtonModule, MatIconModule, MatDividerModule,
    MatInputModule, MatFormFieldModule, MatDatepickerModule,
    MatListModule, MatCardModule, MatCheckboxModule, MatSlideToggleModule,
    MatTableModule, MatPaginatorModule,
    DragDropModule,
    ModalModule.forRoot(),
    AppRoutingModule, MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
