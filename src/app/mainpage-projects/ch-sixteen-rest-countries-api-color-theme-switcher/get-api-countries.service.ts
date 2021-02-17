import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountriesRestApiResponseModel } from './countries-restapi-response.model';

@Injectable({
  providedIn: 'root'
})
export class GetapicountriesService {

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get<CountriesRestApiResponseModel[]>(
      "https://restcountries.eu/rest/v2/all"
    )
  }

}
