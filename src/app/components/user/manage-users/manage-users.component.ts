import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../common/models';
import { Role } from '../../../common/enums/role.enum';
import { EnumToArrayPipe } from '../../../common/enum-to-array.pipe';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  users: User[];
  roleEnum = Role;
  currentId: number;

  getRole(user: User) {
    return user.Role;
  }

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => { this.users = users; console.log(this.users); });
    this.currentId = this.userService.userId;
  }

  changeRole(userId: number, role: string) {
    this.userService.changeRole(userId, role);
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.Id);
    this.users.splice(this.users.indexOf(user), 1);
  }
}
