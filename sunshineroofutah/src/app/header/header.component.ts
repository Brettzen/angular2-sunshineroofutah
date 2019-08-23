import { Component, OnInit } from '@angular/core';
import { Header } from '../header';
import { HEADERIMAGES } from '../header-images';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items = HEADERIMAGES;

  constructor() { }

  ngOnInit() {
  }

}
