import { Component, OnInit } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../contact';

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
  public formFubmit = false;
  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      msg: ['', Validators.required],
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
    console.log(captchaResponse);
  }

  handleLoad(): void {
    this.captchaIsLoaded = true;
    this.captchaIsExpired = false;
  }

  handleExpire(): void {
    this.captchaSuccess = false;
    this.captchaIsExpired = true;
  }

  onSubmit(contactForm): void {
    if (this.contactForm.valid) {
        this.http.post("emailService.php", this.contactForm['email']).subscribe();
        this.formSubmit = true;
    }

  }

}
