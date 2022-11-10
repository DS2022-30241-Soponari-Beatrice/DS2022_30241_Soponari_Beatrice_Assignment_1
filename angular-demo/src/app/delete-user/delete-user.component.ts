import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/userService";

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  deleteUser: FormGroup= new FormGroup({});
  constructor(private fb: FormBuilder, private service: UserService) { }

  ngOnInit(): void {
    this.deleteUser = this.fb.group({
      idUser: ['', {validators: [
          Validators.required
        ]}],
    })
  }
  deleteUserOnClick(){
    const idUser = {
      idUser: this.deleteUser?.value.idUser
    }
    this.service.delete(idUser.idUser).subscribe(() => alert("User deleted successfully!"));
  }


}
