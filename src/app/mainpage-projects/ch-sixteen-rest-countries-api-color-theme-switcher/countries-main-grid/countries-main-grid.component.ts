import { Component, OnInit } from '@angular/core';
import { CountriesRestApiResponseModel } from '../countries-restapi-response.model';
import { GetapicountriesService } from '../get-api-countries.service';

@Component({
  selector: 'app-countries-main-grid',
  templateUrl: './countries-main-grid.component.html',
  styleUrls: ['./countries-main-grid.component.scss']
})
export class CountriesMainGridComponent implements OnInit {

  countries: CountriesRestApiResponseModel[]= [];
  
  constructor(private getCountriesService: GetapicountriesService) {
    this.getCountriesService.getCountries().subscribe(response => {
      this.countries = response;
      // console.log(response);
      console.log(this.countries);
    });
  }

  ngOnInit(): void {
  }

}
