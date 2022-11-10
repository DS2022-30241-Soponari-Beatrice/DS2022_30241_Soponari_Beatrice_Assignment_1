import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DeviceService} from "../../services/deviceService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {

  updateDevice: FormGroup = new FormGroup({});
  id: string | undefined;
  constructor(private fb: FormBuilder, private service: DeviceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateDevice =  this.fb.group({
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
  updateDeviceOnclick() {
    this.id = this.router.snapshot.params['id']
    const device = {
      description: this.updateDevice?.value.description,
      address: this.updateDevice?.value.address,
      max_hourly_energy_consumption: this.updateDevice?.value.max_hourly_energy_consumption,
    }
    if(this.id !== undefined)
    {
      console.log(this.id);
      this.service.updateDevice({description: device.description, address: device.address, max_hourly_energy_consumption: device.max_hourly_energy_consumption, id: this.id}).subscribe(() => alert("Updated successfully!"));
      this.updateDevice.reset();
    }

  }
}
