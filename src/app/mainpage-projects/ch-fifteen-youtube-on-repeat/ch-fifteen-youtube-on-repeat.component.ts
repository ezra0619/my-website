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

  youtubeSearchResults: {
    videoId: string;
    videoTitle: string;
    videoThumbnail: {
      url: string,
      width: number,
      height: number,
    };
  }[] = [];

  searchParameters = "";
  chosenYoutubeId: string = "";
  chosenYoutubeLink: string = "https://www.youtube.com/embed/" + this.chosenYoutubeId + "?autoplay=1&loop=1&playlist=" + this.chosenYoutubeId;
  smthWasSearched: boolean = false;
  error = null;
  errorMessage = "";
  constructor() { }

  ngOnInit(): void {
  }

  apiKey = environment.ytApiKey;
  
  youtubeApi = new YoutubeDataAPI(this.apiKey);

  parseSearchParameters(){
    console.log(this.searchParameters);
    console.log(this.searchParameters.replace(/\s/g, ','))
  }
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
      console.error(err);
      this.error = true;
      this.errorMessage = err;
    })
  }

  playVideo(videoId: string){
    this.chosenYoutubeId = videoId;
    this.chosenYoutubeLink = "https://www.youtube.com/embed/" + this.chosenYoutubeId + "?autoplay=1&loop=1&playlist=" + this.chosenYoutubeId;;
  }
}
