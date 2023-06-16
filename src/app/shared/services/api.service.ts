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
    return this.http.post(this.domaine+url, entity);
  }

  updateEntity(url:string,id:string, entity: any){
      return this.http.put(this.domaine+url+id,entity);
  }

  DeleteEntity(url:string,id:string){
    return this.http.delete(this.domaine+url+id);
  }


}
