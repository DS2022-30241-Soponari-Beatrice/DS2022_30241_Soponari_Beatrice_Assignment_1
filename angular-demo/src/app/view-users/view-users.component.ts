import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../models/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/userService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  users$ : Observable<User[]> | undefined;
  viewUsers: FormGroup= new FormGroup({});

  constructor(private service: UserService,private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.users$ = this.service.getUsers();
    this.users$.subscribe(item =>  console.log(item.length));
    this.viewUsers = this.fb.group({
      username: ['', {validators: [
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

  goToAddUser() {
    this.router.navigateByUrl('/add-users').then(r => console.log(r));
  }

  goToDeleteUser() {
    this.router.navigateByUrl('/delete-user').then(r => console.log(r));
  }
}
