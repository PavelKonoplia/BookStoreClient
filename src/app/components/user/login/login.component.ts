import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService: UserService) { }
  
  loginForm: FormGroup = new FormGroup({
    "userName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
  });

  submit() {
    this.userService.login(this.loginForm.get("userName").value, this.loginForm.get("password").value);
  }

  logout(){
    this.userService.logout();
  }
}
