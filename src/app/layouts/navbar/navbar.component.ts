import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  titre= "Gestion d'assignments";
  visibility= false;


  constructor(private router: Router) {
  }
  showMenu(){
      this.visibility = !this.visibility;
  }
  redirect(route:string){
    this.visibility = false;
    this.router.navigate([route]);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
