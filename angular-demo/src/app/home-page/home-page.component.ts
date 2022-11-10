import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private router: Router) { }

  manageUsersClick()
  {
    this.router.navigateByUrl("/view-users");
  }

  manageDevicesClick() {
    this.router.navigateByUrl("/view-devices");
  }
}
