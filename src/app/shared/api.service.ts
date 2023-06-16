import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Etudiant} from "../pages/etudiant/etudiant.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getEntity(url:string, page:number, limit:number){
    return this.http.get<Etudiant[]>(url+ "?page=" + page + "&limit=" + limit);
  }
  getEntityDetails(url:string,id:string){
    return this.http.get<any[]>(url+ id);
  }


  addEntity(url:string, entity: any){

  }

  updateEntity(url:string, entity: any){

  }
}
