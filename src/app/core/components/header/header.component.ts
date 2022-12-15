import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.router.navigateByUrl('');
  }

  onAllUsers(){
    this.router.navigateByUrl('/users');
  }
}
