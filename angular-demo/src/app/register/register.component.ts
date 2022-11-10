import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthentificationService} from "../services/authentificationService";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup= new FormGroup({});
  constructor(private fb: FormBuilder, private router: Router, private service: AuthentificationService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', {validators: [
          Validators.required
        ]}],
      password: ['',{validators: [
          Validators.required
        ]}],
      name: ['',{validators: [
          Validators.required
        ]}]
    })

  }

  get username(){
    return this.registerForm?.get('username');
  }

  get password(){
    return this.registerForm?.get('password');
  }
  register(){
    const user = {
      username: this.registerForm?.value.username,
      password: this.registerForm?.value.password,
      name: this.registerForm?.value.name,
    }
    this.service.register({username: user.username, name:user.name, password:user.password, role: "Client", id:""}).subscribe(item => console.log(item.name));
    this.router.navigateByUrl("/login");
  }

  ngOnDestroy(){
    console.log("on destroy");
  }

}
