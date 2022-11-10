import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/userService";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateUser: FormGroup = new FormGroup({});
  id: string | undefined;
  constructor(private fb: FormBuilder, private service: UserService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateUser =  this.fb.group({
      username: ['', {validators: [
          Validators.required
        ]}],
      password: ['',{validators: [
          Validators.required
        ]}],
      name: ['',{validators: [
          Validators.required
        ]}],
      role: ['', {validators: [
          Validators.required
        ]}]
    })
  }
  updateUserOnClick() {
    this.id = this.router.snapshot.params['id'];
    const user = {
      username: this.updateUser?.value.username,
      password: this.updateUser?.value.password,
      name: this.updateUser?.value.name,
      role: this.updateUser?.value.role
    }
    if(this.id !== undefined)
    {
      this.service.updateUser({username: user.username, name:user.name, password:user.password, role: user.role, id: this.id}).subscribe(() => alert("Updated successfully!"));
    }

  }

}
