import { Component, OnInit } from '@angular/core';
import { Nav } from '../nav';
import { NAVLINKS } from '../nav-links';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  links = NAVLINKS;

  constructor() { }

  ngOnInit() {
  }

}
