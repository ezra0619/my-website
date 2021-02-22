import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ch-sixteen-rest-countries-api-color-theme-switcher',
  templateUrl: './ch-sixteen-rest-countries-api-color-theme-switcher.component.html',
  styleUrls: ['./ch-sixteen-rest-countries-api-color-theme-switcher.component.scss']
})
export class ChSixteenRESTCountriesApiColorThemeSwitcherComponent implements OnInit {

  lightMode = {
    buttonText: "Dark Mode",
    textColor: "hsl(200, 15%, 8%)",
    background: "hsl(0, 0%, 98%)",
    elementsBackground: "hsl(0, 0%, 100%)"
  };

  darkMode = {
    buttonText: "Light Mode",
    textColor: "hsl(0, 0%, 100%)",
    background: "hsl(207, 26%, 17%)",
    elementsBackground: "hsl(209, 23%, 22%)",
  };
  
  currentMode = this.lightMode;

  constructor() { 

  }

  changeMode(){
    if(this.currentMode === this.lightMode){
      this.currentMode = this.darkMode
    }else {
      this.currentMode = this.lightMode
    }
  }

  ngOnInit(): void {}

}
