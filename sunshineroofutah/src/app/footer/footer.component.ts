import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  section = {
    about: "About Us",
    sitemap: "Site Map",
    contact: "Contact Us",
    currentYear: new Date().getFullYear()
  };

  constructor() { }

  ngOnInit() {
  }

}
