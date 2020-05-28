import { Component, OnInit } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-contact',
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ display: 'block' })),
      state('hidden', style({ display: 'none' })),
      transition('visible => hidden', [
        animate('.5s')
      ]),
      transition('hidden => visible', [
        animate('.5s')
      ]),
    ]),
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  section = {
    title: "Contact Us for a Free Quote"
  };

  public readonly siteKey = "6LcoVKMUAAAAAB5-Mq4dy7O3Or39DLKHQg5nwDGQ";

  public contactForm: FormGroup;
  public formSubmit = false;
  public submitMsg = "pooties";
  public errorMsg = true;
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  constructor(private fb: FormBuilder, private http: HttpClient, private contactService : ContactService) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      address: ['', Validators.required],
      message: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
  }

  handleReset(): void {
    this.captchaSuccess = false;
    this.captchaResponse = undefined;
    this.captchaIsExpired = false;
  }

  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    this.captchaIsExpired = false;
  }

  handleLoad(): void {
    this.captchaIsLoaded = true;
    this.captchaIsExpired = false;
  }

  handleExpire(): void {
    this.captchaSuccess = false;
    this.captchaIsExpired = true;
  }

  onSubmit(contactForm) {
    if (this.contactForm.valid) {
        let form = JSON.stringify(this.contactForm.value);
        this.contactService.sendEmail(form).subscribe((response)=> {
          if (response === 0) {
            this.errorMsg = true;
            this.submitMsg = "Sorry, your message couldn't be sent. Please try again later.";
          } else if (response === 1) {
            this.errorMsg = false;
            this.submitMsg = "Thanks! We'll get back to you.";
          } else {
            this.errorMsg = true;
            this.submitMsg = "Sorry, your message couldn't be sent. Please try again later.";
          }
        }, (error)=> {
          this.errorMsg = true;
          this.submitMsg = "Sorry, your message couldn't be sent. Please try again later.";
        });
    } else {
      this.errorMsg = true;
      this.submitMsg = "Please fill out all required fields.";
    }
    document.querySelector("#contact").scrollIntoView(true);
    this.formSubmit = true;
  }
}
