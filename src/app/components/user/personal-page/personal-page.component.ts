import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Role } from '../../../common/enums/role.enum';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  role: Role;

  constructor(private userService:UserService) {
    this.role = this.userService.role;
  }

  ngOnInit() {
  }

  checking(){
    console.log(this.role, this.userService.userId)
  }
}
