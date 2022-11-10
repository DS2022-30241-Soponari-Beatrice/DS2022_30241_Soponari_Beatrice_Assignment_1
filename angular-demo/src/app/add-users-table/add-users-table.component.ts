import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthentificationService} from "../services/authentificationService";
import {UserService} from "../services/userService";

@Component({
  selector: 'app-add-users-table',
  templateUrl: './add-users-table.component.html',
  styleUrls: ['./add-users-table.component.css']
})
export class AddUsersTableComponent implements OnInit {

  addUser: FormGroup= new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router, private service: AuthentificationService, private userService: UserService) { }

  ngOnInit(): void {
    this.addUser = this.fb.group({
      username: ['', {validators: [
          Validators.required
        ]}],
      password: ['',{validators: [
          Validators.required
        ]}],
      name: ['',{validators: [
          Validators.required
        ]}],
      role: ['',{validators: [
          Validators.required
        ]}]
    })
  }

  register(){
    const user = {
      username: this.addUser?.value.username,
      password: this.addUser?.value.password,
      name: this.addUser?.value.name,
      role: this.addUser?.value.role
    }
    console.log("username = " + user.username)
    this.service.register({username: user.username, name:user.name, password:user.password, role: user.role, id:""}).subscribe(() => {alert("User Added successfully!"); this.router.navigateByUrl('/view-users')});
  }



}
