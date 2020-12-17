import { Component, OnInit } from '@angular/core';

  const testimonialsContent = [
    {
        testimonial: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
        personName: "Tanya Sinclair",
        personTitle: "UX Engineer",
        personImg: "assets/chTen-coding-bootcamp-testimonials-slider/image-tanya.jpg"
    },
    {
        testimonial: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        personName: "John Tarkpor",
        personTitle: "Junior Front-end Developer",
        personImg: "assets/chTen-coding-bootcamp-testimonials-slider/image-john.jpg"
    }
]

@Component({
  selector: 'app-ch-ten-coding-bootcamp-testimonials-slider',
  templateUrl: './ch-ten-coding-bootcamp-testimonials-slider.component.html',
  styleUrls: ['./ch-ten-coding-bootcamp-testimonials-slider.component.scss']
})
export class ChTenCodingBootcampTestimonialsSliderComponent implements OnInit {

  currentNo = 0;
  currentInfo = testimonialsContent[0];

  change(){
    if(this.currentNo === 0){
      this.currentNo = 1;
      this.currentInfo = testimonialsContent[1];
    }else {
      this.currentNo = 0;
      this.currentInfo = testimonialsContent[0];
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
