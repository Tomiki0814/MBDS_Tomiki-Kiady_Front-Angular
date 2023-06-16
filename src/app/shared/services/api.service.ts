import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Etudiant} from "../../pages/etudiant/etudiant.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //domaine=""; prod
  domaine ="http://localhost:8010/api/";//locale
  constructor(private http:HttpClient) { }

  getEntity(url:string){
    return this.http.get<any>(this.domaine+url);
  }
  getEntityDetails(url:string,id:string){
    return this.http.get<any[]>(this.domaine+url+ id);
  }


  addEntity(url:string, entity: any){

  }

  updateEntity(url:string, entity: any){

  }
}
