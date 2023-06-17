import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor() { }

  isLogged() {
    let username = localStorage.getItem("username")
    if(username==null){
      return  false;
    }
    else{
      return true;
    }
  }
  logOut() {
    localStorage.clear();
  }
  // si on l'utilisait on ferai isAdmin().then(...)
  isAdmin() {
    if(this.isLogged() && localStorage.getItem("profil")=="ADMIN"){
      return true;
    }
    return false;
  }
}
