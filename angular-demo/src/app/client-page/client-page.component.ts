import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../services/authentificationService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  constructor(private service: AuthentificationService, private route: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.service.logOut();
    this.route.navigateByUrl('/login');
  }
}
