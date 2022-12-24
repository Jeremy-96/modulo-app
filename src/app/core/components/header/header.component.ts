import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  imageUrl!: string;
  imageAlt!: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.imageAlt = 'Modulo logo';
    this.imageUrl = './assets/images/modulo_logo.svg';
  }

  onToggleMenu(){
    const header = document.querySelector("header");
    header?.classList.toggle("toggle");
  }

  onGoToHome(){
    const header = document.querySelector("header");
    header?.classList.remove("toggle");
    this.router.navigateByUrl("")
    
  }

  onAllUsers(){
    const header = document.querySelector("header");
    header?.classList.remove("toggle");
    this.router.navigateByUrl('/users');
  }

  onGoToCreate(){
    const header = document.querySelector("header");
    header?.classList.remove("toggle");
    this.router.navigateByUrl('/signup');
  }
}
