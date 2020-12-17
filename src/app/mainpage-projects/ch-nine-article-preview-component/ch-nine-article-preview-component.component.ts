import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ch-nine-article-preview-component',
  templateUrl: './ch-nine-article-preview-component.component.html',
  styleUrls: ['./ch-nine-article-preview-component.component.scss']
})
export class ChNineArticlePreviewComponentComponent implements OnInit {

  displaySocialBubble = "none";
  style = "hsl(210, 46%, 95%)";
  shareIcon = "assets/chNine-article-preview-component/icon-share.svg";

  displayBubble(){
    if(this.displaySocialBubble === "none"){
      this.displaySocialBubble = 'flex';
      this.style = "hsl(212, 23%, 69%)";
      this.shareIcon = "assets/chNine-article-preview-component/icon-share-inversed.svg";
    }else {
      this.displaySocialBubble = 'none';
      this.style = "hsl(210, 46%, 95%)";
      this.shareIcon = "assets/chNine-article-preview-component/icon-share.svg";
    }

    // console.log(this.displaySocialBubble);
    // console.log(this.style);
    // console.log(this.shareIcon);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
