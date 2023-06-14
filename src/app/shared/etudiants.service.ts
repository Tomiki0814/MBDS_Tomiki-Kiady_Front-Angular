import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Etudiant} from "../pages/etudiant/etudiant.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

  constructor(private http:HttpClient) {}

  //uri_api = 'http://localhost:8010/api/etudiants';
  uri_api = 'https://mbds-assignement-back-end-api.onrender.com/api/etudiants';
  getEtudiant(page:number, limit:number):Observable<any> {

    return this.http.get<Etudiant[]>(this.uri_api+ "?page=" + page + "&limit=" + limit);
  }
}
