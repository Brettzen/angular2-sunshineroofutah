import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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

  public readonly siteKey = "6LcoVKMUAAAAAB5-Mq4dy7O3Or39DLKHQg5nwDGQ";

  public contactForm: FormGroup;

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
        this.http.post("src/emailService.php", this.contactForm['email']).subscribe();
    }
    console.log(this.contactForm.value);
    alert('Thanks! We will get back to you.');

  }

}
