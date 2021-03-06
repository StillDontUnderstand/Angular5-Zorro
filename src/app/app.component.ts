import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import '../assets/css/styles.css';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  template:`<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private http:Http){}
  httpTest(): void {
    this.http.get('api/mockdata').subscribe(data => {
      console.info(data);
    })
  }
  ngOnInit(): void {

  }

}