import { Component, OnInit } from '@angular/core';
import { User } from '../models/User.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users!: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getAllUsers();
  }
}