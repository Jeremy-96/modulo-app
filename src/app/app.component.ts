import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  myUser!: User;

  ngOnInit(){
    this.myUser = new User(
      1,
      'https://jeremythonon.be/img/me.1b4c8768.jpg',
      "Jérémy",
      "Thonon",
      "jeremythonon96@hotmail.com",
      "**********"
    );
  }
}
