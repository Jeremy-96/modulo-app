import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  user$!: Observable<User>;

  constructor(private route: ActivatedRoute,
              private userService: UsersService) { }

  ngOnInit(): void {
    const userId = +this.route.snapshot.params['id'];
    console.log(userId);
    this.user$ = this.userService.getUserById(userId);
  }
}
