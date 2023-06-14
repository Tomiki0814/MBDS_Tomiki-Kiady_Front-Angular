import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etudiant} from "../pages/etudiant/etudiant.model";
import {Matiere} from "../pages/matiere/matiere.model";

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private http:HttpClient) {}

  //uri_api = 'http://localhost:8010/api/matiere';
  uri_api = 'https://mbds-assignement-back-end-api.onrender.com/api/matiere';

  getMatiere():Observable<any> {

    return this.http.get<Matiere[]>(this.uri_api);
  }
}
