import { Component, OnInit } from '@angular/core';

export class chSixContactForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-ch-six-intro-component-with-sign-up-form',
  templateUrl: './ch-six-intro-component-with-sign-up-form.component.html',
  styleUrls: ['./ch-six-intro-component-with-sign-up-form.component.scss']
})
export class ChSixIntroComponentWithSignUpFormComponent implements OnInit {

  chSixFormModel = new chSixContactForm();

  constructor() { }

  ngOnInit(): void {
  }

}
