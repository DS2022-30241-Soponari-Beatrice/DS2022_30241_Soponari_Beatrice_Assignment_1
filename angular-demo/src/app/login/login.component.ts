import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {AuthentificationService} from "../services/authentificationService";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  myForm: FormGroup= new FormGroup({});
  constructor(private fb: FormBuilder, private router: Router, private service: AuthentificationService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', {validators: [
          Validators.required
        ]}],
      password: ['',{validators: [
          Validators.required
        ]}]
    })

  }

  get username(){
    return this.myForm?.get('username');
  }

  get password(){
    return this.myForm?.get('password');
  }
  login(){
    const user = {
      username: this.myForm?.value.username,
      password: this.myForm?.value.password
    }
    this.service.login({username: user.username, password:user.password}).subscribe(item => item ? this.router.navigateByUrl("/home-page") : console.log("orice"));
  }

  ngOnDestroy(){
    console.log("on destroy");
  }
}
