import { Component, OnInit } from '@angular/core';


export class ChFiveFormSubmit {
  email: string;
}
@Component({
  selector: 'app-ch-five-base-apparel-coming-soon',
  templateUrl: './ch-five-base-apparel-coming-soon.component.html',
  styleUrls: ['./ch-five-base-apparel-coming-soon.component.scss']
})
export class ChFiveBaseApparelComingSoonComponent implements OnInit {

  chFiveFormModel = new ChFiveFormSubmit();


  constructor() { }

  ngOnInit(): void {
  }

}
