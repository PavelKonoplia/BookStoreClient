import { RegistrateService } from './../../../services/registrate.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidUser: boolean = false;
  token: IToken;

  constructor(private registrateService: RegistrateService, private userService: UserService) {
    this.token = JSON.parse(localStorage.getItem("token"));
  }

  loginForm: FormGroup = new FormGroup({
    "userName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
  });

  submit() {
    this.registrateService.login(this.loginForm.get("userName").value, this.loginForm.get("password").value)
      .subscribe((token: IToken) => {
        this.token = token;
        localStorage.setItem("token", JSON.stringify(token));
      });
  }

  logout() {
    this.userService.logout();
    this.token = undefined;
  }
}
