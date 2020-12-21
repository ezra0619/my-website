import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpInformationModel } from './ip-information.model';
import { environment } from './../../../environments/environment';

@Injectable()
export class RequestIPInfoService{

    constructor(private http: HttpClient){}

    //ipify key
    apiKey: string = environment.ipifyApiKey;

    getIPInfo(ip: string){
        return this.http.get<IpInformationModel>(
            'https://geo.ipify.org/api/v1?apiKey=' + this.apiKey + '&ipAddress=' + ip
        )
    }
}