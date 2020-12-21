import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NgForm } from '@angular/forms';
import { environment } from './../../../environments/environment';

export class FormSubmitted {
  public name: string;
  public subject: string;
  public email: string;
  public message: string;
}

@Component({
  selector: 'app-mainpage-contact-form',
  templateUrl: './mainpage-contact-form.component.html',
  styleUrls: ['./mainpage-contact-form.component.scss']
})
export class MainpageContactFormComponent implements OnInit {

  model = new FormSubmitted();
  error = null;
  emailSent = false;
  successConfirmation = false;

  // if ok
  // error = null;
  // emailSent = true;
  // successConfirmation = true;

  // if not ok
  // error = 'someError';
  // emailSent = true;
  // successConfirmation = false;
  
  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(e: Event, form: NgForm){
    // console.log(e.target);
    e.preventDefault();
    emailjs.sendForm(environment.emailJsServiceID, 'contact_form', e.target as HTMLFormElement, environment.emailJsUserID)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.error = null;
        this.emailSent = true;
        this.successConfirmation = true;
        form.resetForm();
      }, (error) => {
        console.log(error.text);
        this.error = error.text;
        this.emailSent = true;
        this.successConfirmation = false;
      }
    );

  }

}
