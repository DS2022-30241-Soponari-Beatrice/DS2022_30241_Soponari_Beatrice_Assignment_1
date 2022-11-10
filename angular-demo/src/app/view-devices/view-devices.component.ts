import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../models/user";
import {FormBuilder} from "@angular/forms";
import {UserService} from "../services/userService";
import {Router} from "@angular/router";
import {DeviceService} from "../services/deviceService";
import {Device} from "../models/device";

@Component({
  selector: 'app-view-devices',
  templateUrl: './view-devices.component.html',
  styleUrls: ['./view-devices.component.css']
})
export class ViewDevicesComponent implements OnInit {
  devices$ : Observable<Device[]> | undefined;

  constructor(private service: DeviceService,private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.devices$ = this.service.getDevices();

    this.devices$.subscribe(item =>  console.log());

  }
  goToAddDevice() {
    this.router.navigateByUrl('/add-device').then(r => console.log(r));
  }

  deleteDevice(id: String) {
    this.service.delete(id).subscribe(() => alert("Deleted succesfully!"));
    setTimeout(() => window.location.reload())
  }
}
