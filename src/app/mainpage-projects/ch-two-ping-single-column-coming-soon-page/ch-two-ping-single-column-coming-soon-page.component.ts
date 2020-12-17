import { Component, OnInit } from '@angular/core';

export class chTwoFormSubmitted {
  email: string;
}

@Component({
  selector: 'app-ch-two-ping-single-column-coming-soon-page',
  templateUrl: './ch-two-ping-single-column-coming-soon-page.component.html',
  styleUrls: ['./ch-two-ping-single-column-coming-soon-page.component.scss']
})
export class ChTwoPingSingleColumnComingSoonPageComponent implements OnInit {

  chTwoFormModel = new chTwoFormSubmitted();
  
  constructor() { }

  ngOnInit(): void {
  }

}
