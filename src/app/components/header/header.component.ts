import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  // change to templateUrl to use external html instead of internal ts file 
  templateUrl: './header.component.html',

})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
