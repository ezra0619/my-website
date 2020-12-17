import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    //or in the providers in app module
    providedIn: 'root'
})
export class ShortenUrlService {

    constructor(private http: HttpClient){}

    shortenUrl(longUrl: string){
        return this.http.get(
            'https://tinyurl.com/api-create.php?url=' + longUrl,
            {responseType: 'text'}
            )
    }

}