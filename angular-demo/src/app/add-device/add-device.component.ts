import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DeviceService} from "../services/deviceService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {
  addDeviceForm:  FormGroup= new FormGroup({});
  constructor(private fb: FormBuilder, private service: DeviceService, private router: Router) { }

  ngOnInit(): void {
    this.addDeviceForm = this.fb.group({
      description: ['', {validators: [

          Validators.required
        ]}],
      address: ['',{validators: [
          Validators.required
        ]}],
      max_hourly_energy_consumption: ['',{validators: [
          Validators.required
        ]}]
    })
  }

  addDevice() {
    const device ={
      description: this.addDeviceForm?.value.description,
      address: this.addDeviceForm?.value.address,
      max_hourly_energy_consumption: this.addDeviceForm?.value.max_hourly_energy_consumption
    }
    this.service.insertDevice({description: device.description, address:device.address, max_hourly_energy_consumption:device.max_hourly_energy_consumption, id:""}).subscribe(() => {alert("Device added succesfully"); this.router.navigateByUrl('/view-devices') });
  }
}
