import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpInformationModel } from './ip-information.model';

@Injectable()
export class RequestIPInfoService{

    constructor(private http: HttpClient){}

    apiKey: string = "at_aFOosVyFIRdhbnItAfkctfvjObTnf";

    getIPInfo(ip: string){
        return this.http.get<IpInformationModel>(
            'https://geo.ipify.org/api/v1?apiKey=' + this.apiKey + '&ipAddress=' + ip
        )
    }
}