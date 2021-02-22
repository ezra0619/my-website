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

  @Input() currentMode: { buttonText: String, textColor: String, background: String, elementsBackground: String} = {
    buttonText: "Dark Mode",
    textColor: "hsl(200, 15%, 8%)",
    background: "hsl(0, 0%, 98%)",
    elementsBackground: "hsl(0, 0%, 100%)"
  };

  constructor(private route: ActivatedRoute, 
              private getCountriesService: GetapicountriesService,
              private _location: Location) { 
    
    const getCountryJson = new Promise( (resolve, reject) => {
      this.getCountriesService.getCountries().subscribe(response => {
        resolve(this.countries = response);
        console.log(this.countries)
      });
    })

    var countryFilter = this.route.snapshot.params['country'];
    console.log(countryFilter);

    getCountryJson.then( () => {
      this.country = this.countries.find( x => x.name === countryFilter);
      console.log(this.country);
    }).then( () => {
      for(let i = 0; i < this.country.borders.length; i++){
        this.borderCountries.push(this.countries.find(x => x.alpha3Code === this.country.borders[i]).name)
      }
    }
      
    )

  }

  ngOnInit(): void {
  }

  backButton(){
    this._location.back();
  }

}