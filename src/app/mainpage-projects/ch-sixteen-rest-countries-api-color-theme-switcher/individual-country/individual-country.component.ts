import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesRestApiResponseModel } from '../countries-restapi-response.model';
import { GetapicountriesService } from '../get-api-countries.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-individual-country',
  templateUrl: './individual-country.component.html',
  styleUrls: ['./individual-country.component.scss']
})
export class IndividualCountryComponent implements OnInit {

  countries: CountriesRestApiResponseModel[]= [];
  country: CountriesRestApiResponseModel;
  borderCountries = [];

  constructor(private route: ActivatedRoute, 
              private getCountriesService: GetapicountriesService,
              private _location: Location) { 
    
    const getCountryJson = new Promise( (resolve, reject) => {
      this.getCountriesService.getCountries().subscribe(response => {
        resolve(this.countries = response);
      });
    })

    var countryFilter = this.route.snapshot.params['country'];

    getCountryJson.then( () => {
      this.country = this.countries.find( x => x.name === countryFilter);
    }).then( () => {
      for(let i = 0; i < this.country.borders.length; i++){
        this.borderCountries.push(this.countries.find(x => x.alpha3Code === this.country.borders[i]).name)
      }
    })

  }

  ngOnInit(): void {
  }

  backButton(){
    this._location.back();
  }

}