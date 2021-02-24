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
  regions = [];
  filterByCountry = '';
  filterByRegion = '';

  constructor(private getCountriesService: GetapicountriesService) {
    this.getCountriesService.getCountries().subscribe(response => {
      this.countries = response;
      for(let i = 0; i < this.countries.length; i++){
        //only if we cannot find the region in the array, we push it
        if(this.regions.indexOf(this.countries[i].region) == -1){
          this.regions.push(this.countries[i].region)
        }
      }

    });
  }

  ngOnInit(): void {
  }

  selectRegionFilter(region: string){
    if(this.filterByRegion === region){
      //removes the previous filter string
      this.filterByRegion = '';
    }else{
      this.filterByRegion = region;
    }
  }

}
