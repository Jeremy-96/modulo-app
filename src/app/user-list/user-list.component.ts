import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() user!: User;

  users$!: Observable<User[]>;
  user$!: Observable<User>;

  constructor(private usersService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.users$ = this.usersService.getAllUsers();
  }

  onViewUser(){
    this.router.navigateByUrl(`/users/${this.user.id}`);
  }
}
