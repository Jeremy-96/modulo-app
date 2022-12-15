import { Injectable } from '@angular/core';

import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [
    {
      id: 1,
      picture: "https://jeremythonon.be/img/me.1b4c8768.jpg",
      firstName: "Jérémy",
      lastName: "Thonon",
      email: "jeremythonon96@hotmail.com",
      registerDate: new Date(),
    },
    {
      id: 2,
      picture: "https://www.fredzone.org/wp-content/uploads/2022/05/eddie_murphy_meilleurs_films-scaled.webp",
      firstName: "Eddy",
      lastName: "Murphy",
      email: "eddy.m@gmail.com",
      registerDate: new Date(),
    },
    {
      id: 3,
      picture: "https://resize.elle.fr/portrait_1280/var/plain_site/storage/images/people/la-vie-des-people/news/tom-cruise-sa-derniere-apparition-interpelle-ses-fans-3966827/95602269-1-fre-FR/Tom-Cruise-sa-derniere-apparition-interpelle-ses-fans.jpg",
      firstName: "Tom",
      lastName: "Cruise",
      email: "topgun.maverick@skynet.com",
      registerDate: new Date(),
    },
  ];

  constructor() { }

  getAllUsers(){
    return this.users;
  }

  createUser(formValue: { picture: string, firstName: string, lastName: string, email: string }): void {
    const user: User = {
      ...formValue,
      id: this.users[this.users.length - 1].id + 1,
      registerDate: new Date()
    };
    this.users.push(user);
  }
}
