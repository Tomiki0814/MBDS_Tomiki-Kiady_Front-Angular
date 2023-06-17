import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  ngOnInit(): void {
    this.checkLogged();
  }

  constructor(private authService: AuthService, private router: Router, private guard: AuthService) {
  }

  checkLogged() {
    if (!this.authService.isLogged()) {
      this.router.navigate(['login']);
    }
  }
}
