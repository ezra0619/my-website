import { Component, OnInit, Pipe } from '@angular/core';
import { IpInformationModel } from './ip-information.model';
import { RequestIPInfoService } from './requestIPInfo.service';
import { PipeSafeLink } from './safeLink.pipe';

@Component({
  selector: 'app-ch-fourteen-ip-address-tracker',
  templateUrl: './ch-fourteen-ip-address-tracker.component.html',
  styleUrls: ['./ch-fourteen-ip-address-tracker.component.scss'],
  providers: [RequestIPInfoService, PipeSafeLink],
})
export class ChFourteenIPAddressTrackerComponent implements OnInit {

  IPRequestInfoReceived: IpInformationModel; 

  currentIP = '';
  error = false;
  errorMessage = "";
  

  ipAddress: string = '192.212.174.101';
  location: string = 'California, US';
  timezone: string = '-08:00';
  isp: string = 'Southern California Edison';
  latitude: number = 34.08057;
  longitude: number = -118.07285;


  googleApiKey = 'AIzaSyAkD4CTLWdtTpSywlYBsTnGGloe3MssTD8';
  googleMapLink = 'https://www.google.com/maps/embed/v1/place?key=' + this.googleApiKey + '&q=' + this.latitude + ',' + this.longitude;

  constructor(private RequestIPInfo: RequestIPInfoService) { 

  }


  ngOnInit(): void {
    console.log(this.googleMapLink)
  }

  onSearchButtonPress(ip: string){
    // console.log(ip);
    this.RequestIPInfo.getIPInfo(ip).subscribe( ipInformation  => {
      // console.log(ipInformation);
      this.error = false;
      // this.IPRequestInfoReceived = ipInformation;
      // console.log(this.IPRequestInfoReceived);
      this.ipAddress = ipInformation.ip;
      this.location = ipInformation.location.region + ', ' + ipInformation.location.country;
      this.timezone = ipInformation.location.timezone;
      this.isp = ipInformation.isp;
      this.latitude = ipInformation.location.lat;
      this.longitude = ipInformation.location.lng;
      this.googleMapLink = 'https://www.google.com/maps/embed/v1/place?key=' + this.googleApiKey + '&q=' + this.latitude + ',' + this.longitude;
      // console.log(this.googleMapLink);
    }, error => {
      console.log(error);
      this.error = true;
      if(error.status === 422){
        this.errorMessage = "This does not appear to be a valid IP.";
      }else {
        this.errorMessage = error.statusText
      }
      
    })
  }
}
