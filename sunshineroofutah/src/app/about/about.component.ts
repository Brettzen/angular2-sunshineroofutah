import { Component, OnInit } from '@angular/core';
import { About } from '../about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    about: About = {
      title: "About",
      desc1: "We perform all types of roofing jobs in Roosevelt, Vernal, Duchesne, Garden City, Laketown, Montpelier and anywhere else in the Uintah Basin and Bear Lake areas. We utilize a variety of materials (asphalt shingles, cedar shakes, torch-down membrane to name a few) to give you the style of roofing you would like. Check out our products and services page for more information.",
      desc2: "Established in 1982 in Roosevelt, UT, Sunshine Roofing Company is a licensed and insured roofing contractor. Contact us today to schedule a quote!"
    };

  constructor() { }

  ngOnInit() {
  }

}
