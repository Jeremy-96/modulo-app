import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title!: string;
  value!: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.value = false;
    if(this.value != false){
      this.title = "Thonon J.";
    }else{
      this.title = "Modulo."
    }
  }

  onToggleMenu(){
    const header = document.querySelector("header");
    header?.classList.toggle("toggle");
  }
}
