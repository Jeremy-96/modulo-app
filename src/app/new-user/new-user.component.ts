import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup;
  userPreview$!: Observable<User>;
  urlRegex!: RegExp;
  users!: User[];

  constructor(private formBuilder: FormBuilder,
              private usersServices: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.newUserForm = this.formBuilder.group({
      picture: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
    }, {
      updateOn: 'blur'
    });

    this.userPreview$ = this.newUserForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        registerDate: new Date(),
        id: 0,
      }))
    )
  }

  onSubmitForm(){
    this.usersServices.createUser(this.newUserForm.value);
    this.router.navigateByUrl("/users");
  }

}
