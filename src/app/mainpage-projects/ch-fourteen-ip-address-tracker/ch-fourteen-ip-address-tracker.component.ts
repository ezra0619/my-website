import { Component, OnInit } from '@angular/core';
import { IpInformationModel } from './ip-information.model';
import { RequestIPInfoService } from './requestIPInfo.service';

@Component({
  selector: 'app-ch-fourteen-ip-address-tracker',
  templateUrl: './ch-fourteen-ip-address-tracker.component.html',
  styleUrls: ['./ch-fourteen-ip-address-tracker.component.scss'],
  providers: [RequestIPInfoService]
})
export class ChFourteenIPAddressTrackerComponent implements OnInit {

  IPRequestInfoReceived: IpInformationModel; 

  currentIP = '';
  error = false;
  errorMessage = "";
  
  googleApiKey = 'AIzaSyAkD4CTLWdtTpSywlYBsTnGGloe3MssTD8';
  // googleMapLink = 'https://www.google.com/maps/embed/v1/place?key=' + googleApiKey + 
  //steps - first get your own IP once you access the page
  //send a request for that IP and reveal information
  //generate the map for that IP

  //once one specific IP is searched
  //another request is sent for that information
  //display the next info and the new map

  ipAddress: string = '192.212.174.101';
  location: string = 'BrookLyn, NY';
  timezone: string = '05:00';
  isp: string = 'SpaceX Starlink';

  constructor(private RequestIPInfo: RequestIPInfoService) { }

  ngOnInit(): void {
  }

  onSearchButtonPress(ip: string){
    console.log(ip);
    this.RequestIPInfo.getIPInfo(ip).subscribe( ipInformation  => {
      console.log(ipInformation);
      this.error = false;
      this.IPRequestInfoReceived = ipInformation;
      console.log(this.IPRequestInfoReceived);
      this.ipAddress = this.IPRequestInfoReceived.ip;
      this.location = this.IPRequestInfoReceived.location.region + ', ' + this.IPRequestInfoReceived.location.country;
      this.timezone = this.IPRequestInfoReceived.location.timezone;
      this.isp = this.IPRequestInfoReceived.isp;
    }, error => {
      console.log(error);
      this.errorMessage = error.message;
    })
  }
}
