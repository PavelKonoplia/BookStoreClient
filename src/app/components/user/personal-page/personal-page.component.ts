import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Role } from '../../../common/enums/role.enum';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  role: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.role = this.userService.role;
  }
}
