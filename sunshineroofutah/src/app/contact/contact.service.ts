import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ContactService {

  url = "https://www.sunshineroofutah.com/sendEmail.php";

  constructor(private http : HttpClient) { }

  sendEmail(contactForm): Observable<any> {
    return this.http.post(this.url, contactForm);
  }
}
