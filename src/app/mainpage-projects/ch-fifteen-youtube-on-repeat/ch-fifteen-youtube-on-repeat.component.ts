import { Component, OnInit } from '@angular/core';
import { PipeSafeLink } from '../ch-fourteen-ip-address-tracker/safeLink.pipe';
import { YoutubeDataAPI } from './../../../../node_modules/youtube-v3-api';
import { YoutubeSearchResponseModel } from './youtubeSearchResponse.model';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-ch-fifteen-youtube-on-repeat',
  templateUrl: './ch-fifteen-youtube-on-repeat.component.html',
  styleUrls: ['./ch-fifteen-youtube-on-repeat.component.scss'],
  providers: [PipeSafeLink]
})
export class ChFifteenYoutubeOnRepeatComponent implements OnInit {

//this will hold the information we will need to use in the template
  youtubeSearchResults: {
    videoId: string;
    videoTitle: string;
    videoThumbnail: {
      url: string,
      width: number,
      height: number,
    };
  }[] = [];

  //two way binding with the input type text in the template
  searchParameters = "";

  //values required to generate the youtube iframe
  chosenYoutubeId: string = "";
  chosenYoutubeLink: string = "https://www.youtube.com/embed/" + this.chosenYoutubeId + "?autoplay=1&loop=1&playlist=" + this.chosenYoutubeId;
  
  //values used for error handling
  smthWasSearched: boolean = false;
  error = false;
  errorMessage = "";


  constructor() { }

  ngOnInit(): void {
  }

  apiKey = environment.ytApiKey;
  
  youtubeApi = new YoutubeDataAPI(this.apiKey);

  search(){
    this.smthWasSearched = true;
    this.error = null;
    this.errorMessage = "";
    this.youtubeSearchResults = [];
    this.youtubeApi.searchAll(this.searchParameters.replace(/\s/g, ','),10).then((data: YoutubeSearchResponseModel) => {
      // console.log(data);
      data.items.forEach((element) => {
        // console.log(element.etag);
        // console.log(element.snippet.title);
        this.youtubeSearchResults.push({
          videoId: element.id.videoId,
          videoTitle: element.snippet.title,
          videoThumbnail: element.snippet.thumbnails.default,
        })

      })

  },(err) => {
      this.smthWasSearched = true;
      console.error(err.message);
      this.error = true;
      this.errorMessage = err.message;
    })
  }

  playVideo(videoId: string){
    this.chosenYoutubeId = videoId;
    this.chosenYoutubeLink = "https://www.youtube.com/embed/" + this.chosenYoutubeId + "?autoplay=1&loop=1&playlist=" + this.chosenYoutubeId;;
  }
}
