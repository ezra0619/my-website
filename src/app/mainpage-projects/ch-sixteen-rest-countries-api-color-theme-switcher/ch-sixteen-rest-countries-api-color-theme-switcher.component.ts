import { Component, Input, OnInit } from '@angular/core';
import { Ch16themeService } from './ch16theme.service';

@Component({
  selector: 'app-ch-sixteen-rest-countries-api-color-theme-switcher',
  templateUrl: './ch-sixteen-rest-countries-api-color-theme-switcher.component.html',
  styleUrls: ['./ch-sixteen-rest-countries-api-color-theme-switcher.component.scss']
})
export class ChSixteenRESTCountriesApiColorThemeSwitcherComponent implements OnInit {


  constructor(public themeService: Ch16themeService) {}

  ngOnInit(): void {}

}
