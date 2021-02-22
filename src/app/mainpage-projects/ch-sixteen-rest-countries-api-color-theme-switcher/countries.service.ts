import { Injectable } from '@angular/core';
import { GetapicountriesService } from './get-api-countries.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private getCountriesService: GetapicountriesService) { }

  getCountries(){
    this.getCountriesService.getCountries().subscribe((response) => {
      console.log(response)
      return response
    });
  }
}
