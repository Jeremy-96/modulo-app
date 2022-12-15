import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, take, filter, tap, Subject, takeUntil } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  ngOnInit(){}
}
