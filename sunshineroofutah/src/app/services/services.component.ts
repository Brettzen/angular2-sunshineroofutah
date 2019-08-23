import { Component, OnInit } from '@angular/core';
import { Services } from '../services';
import { PRODUCTS } from '../services-products';
import { SERVICES } from '../services-services';
import { MANUFACTURERS } from '../services-manufacturers';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  section = {
    title: "Products & Services"
  }
  products = PRODUCTS;
  services = SERVICES;
  manufacturers = MANUFACTURERS;

  constructor() { }

  ngOnInit() {
  }

}
