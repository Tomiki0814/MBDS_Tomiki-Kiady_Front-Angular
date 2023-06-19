import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  titre= "Gestion d'assignments";
  visibility= false;


  showMenu(){
      this.visibility = !this.visibility;
  }
}
