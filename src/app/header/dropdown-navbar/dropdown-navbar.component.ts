import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-dropdown-navbar',
  templateUrl: './dropdown-navbar.component.html',
  styleUrls: ['./dropdown-navbar.component.css']
})
export class DropdownNavbarComponent implements OnInit {
  collapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
