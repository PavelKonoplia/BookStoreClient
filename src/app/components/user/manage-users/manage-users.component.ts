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


  roleForm: FormGroup;

  getRole(user:User){
    return user.Role;
  }

  constructor(private userService: UserService) { 
    this.roleForm = new FormGroup({
      role: new FormControl(null)
  });
  this.roleForm.controls['role'].setValue(Role.Customer, {onlySelf: true});
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) => this.users = users);
    this.currentId = this.userService.userId;
  }

  changeRole(userId: number, role: string) {
    console.log("changing role" + userId + " " + role);
    this.userService.changeRole(userId, role);
  }

  deleteUser(user: User) {
    console.log("click");
    this.userService.deleteUser(user.Id);
    this.users.splice(this.users.indexOf(user), 1);
  }

  checking() {
    console.log(this.users);
  }

}
