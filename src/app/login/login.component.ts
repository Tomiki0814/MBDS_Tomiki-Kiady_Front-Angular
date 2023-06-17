import { Component } from '@angular/core';
import { Router} from "@angular/router";
import {ApiService} from "../shared/services/api.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  url="login"
  user={username:"",mdp:""}
  errorMessage="";
  constructor(private apiservice: ApiService, private router: Router) {
  }

  Login(){

    this.apiservice.addEntity(this.url,this.user).subscribe(data =>{
        if(data==null){
          this.errorMessage = "Login Incorrect"
        }else{
          let user = <any>data
          localStorage.setItem("username",user.nom)
          localStorage.setItem("profil",user.profil)
          this.router.navigate(['']);
        }

    })
  }
}
