import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../shared/services/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  url="login"
  user={username:"",mdp:""}
  constructor(private apiservice: ApiService, private router: Router) {
  }

  Login(){
    console.log(this.user);
    this.router.navigate(['']);
    /*this.apiservice.addEntity(this.url,this.user).subscribe(data =>{

    })*/
  }
}
