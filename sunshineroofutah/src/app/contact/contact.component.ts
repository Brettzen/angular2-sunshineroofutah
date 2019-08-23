import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  section = {
    title: "Contact Us for a Free Quote"
  };

  contactForm = this.fb.group({
    // name: ['', Validators.required],
    // email: ['', Validators.required],
    // phone: [''],
    // msg: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      recaptcha: ['', Validators.required]
    });
  }

}
