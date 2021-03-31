import { Injectable } from '@angular/core';

interface LiveProject {
    key: string;
    company: string; 
    projectName: string;
    projectImage: string; 
    technologies: 
        {
            imgName: string, 
            imgAlt: string
        }[]; 
    siteLink: string
}

interface OfflineProject {
    key: string;
    difficulty: number;
    inspiration: string;
    inspirationWebsite: string;
    name: string; 
    challenge: string;
    projectImage: string;
    technologies: 
        {
            imgName: string;
            imgAlt: string
        }[]; 
    siteLink: string,
    // gitHubLink: string
}

@Injectable()
export class ProjectsService {


  //difficulty levels dex
  //newbie - 1
  //junior - 2
  //intermediate - 3
  //advanced - 4
  //guru - 5 

    private liveProjects: LiveProject[] = [
        {
          key: "appFarmWeb",
          company: "App Farm",
          projectName: "App Farm Website",
          projectImage: "appFarmWebsite.png",
          technologies: [ 
              {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
              {imgName: 'wordPress.png', imgAlt: 'WordPress'}
            ],
          siteLink: "https://www.appfarm.nl/"
        }
    ]

    private offlineProjects: OfflineProject[] = [
      {
        key: "challengeSeventeen",
        difficulty: 4,
        inspiration: "Front End Mentor",
        inspirationWebsite: "https://www.frontendmentor.io/",
        name: "Rock, Paper, Scissors, Lizard, Spock game",
        challenge: '17th Challenge',
        projectImage: "challengeSeventeen.png",
        technologies: [ 
          {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
          {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
          {imgName: 'sassIcon.svg', imgAlt: 'SASS'},
          {imgName: 'jsIcon.svg', imgAlt: 'JavaScript'},
          {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
        ],
        siteLink: "/projects/FEM-rock-paper-scissors-lizard-spock-game",
        // gitHubLink: "https://github.com/ezra0619/youtube-on-repeat"
      },
      {
        key: "challengeSixteen",
        difficulty: 4,
        inspiration: "Front End Mentor",
        inspirationWebsite: "https://www.frontendmentor.io/",
        name: "REST Countries API with color theme switcher",
        challenge: '16th Challenge',
        projectImage: "challengeSixteen.jpg",
        technologies: [ 
          {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
          {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
          {imgName: 'sassIcon.svg', imgAlt: 'SASS'},
          {imgName: 'jsIcon.svg', imgAlt: 'JavaScript'},
          {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
        ],
        siteLink: "/projects/FEM-rest-countries-api-with-color-theme-switcher",
        // gitHubLink: "https://github.com/ezra0619/youtube-on-repeat"
      },
      {
        key: "challengeFifteen",
        difficulty: 3,
        inspiration: "Own",
        inspirationWebsite: "listenonrepeat.com",
        name: "Youtube On Repeat",
        challenge: '15th Challenge',
        projectImage: "challengeFifteen.png",
        technologies: [ 
          {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
          {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
          {imgName: 'sassIcon.svg', imgAlt: 'SASS'},
          {imgName: 'jsIcon.svg', imgAlt: 'JavaScript'},
          {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
        ],
        siteLink: "/projects/youtube-on-repeat",
        // gitHubLink: "https://github.com/ezra0619/youtube-on-repeat"
      },
      {
        key: "challengeFourteen",
        difficulty: 3,
        inspiration: "Front End Mentor",
        inspirationWebsite: "https://www.frontendmentor.io/",
        name: "IP Address Tracker",
        challenge: '14th Challenge',
        projectImage: "challengeFourteen.png",
        technologies: [ 
          {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
          {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
          {imgName: 'sassIcon.svg', imgAlt: 'SASS'},
          {imgName: 'jsIcon.svg', imgAlt: 'JavaScript'},
          {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
        ],
        siteLink: "/projects/FEM-ip-address-tracker",
        // gitHubLink: "https://github.com/ezra0619/FEM-ip-address-tracker"
      },
      {
        key: "challengeThirteen",
        difficulty: 3,
        inspiration: "Front End Mentor",
        inspirationWebsite: "https://www.frontendmentor.io/",
        name: "Static Job Listings Master",
        challenge: '13th Challenge',
        projectImage: "challengeThirteen.jpg",
        technologies: [ 
          {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
          {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
          {imgName: 'sassIcon.svg', imgAlt: 'SASS'},
          {imgName: 'jsIcon.svg', imgAlt: 'JavaScript'},
          {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
        ],
        siteLink: "/projects/FEM-static-job-listings-master",
      },
        {
          key: "challengeTwelve",
          difficulty: 2,
          inspiration: "Front End Mentor",
          inspirationWebsite: "https://www.frontendmentor.io/",
          name: "Fylo Landing Page With Two Column Layout",
          challenge: '12th Challenge',
          projectImage: "challengeTwelve.jpg",
          technologies: [ 
            {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
            {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
            {imgName: 'sassIcon.svg', imgAlt: 'SASS'},
            {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
          ],
          siteLink: "/projects/FEM-fylo-landing-page-with-two-column-layout",
          // gitHubLink: "https://github.com/ezra0619/FEM-fylo-landing-page-with-two-column-layout"
        },
        {
          key: "challengeEleven",
          difficulty: 1,
          inspiration: "Front End Mentor",
          inspirationWebsite: "https://www.frontendmentor.io/",
          name: "Huddle Landing Page With Single Introductory Section",
          challenge: '11th Challenge',
          projectImage: "challengeEleven.jpg",
          technologies: [ 
            {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
            {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
            {imgName: 'sassIcon.svg', imgAlt: 'SASS'},
            {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
          ],
          siteLink: "/projects/FEM-huddle-landing-page-single-introduction-section",
          // gitHubLink: "https://github.com/ezra0619/FEM-huddle-landing-page-single-introduction-section"
        },
        {
          key: "challengeTen",
          difficulty: 1,
          inspiration: "Front End Mentor",
          inspirationWebsite: "https://www.frontendmentor.io/",
          name: "Coding Bootcamp Testimonials Slider",
          challenge: '10th Challenge',
          projectImage: "challengeTen.jpg",
          technologies: [ 
            {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
            {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
            {imgName: 'sassIcon.svg', imgAlt: 'SASS'},
            {imgName: 'jsIcon.svg', imgAlt: 'JavaScript'},
            {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
          ],
          siteLink: "/projects/FEM-coding-bootcamp-testimonials-slider",
          // gitHubLink: "https://github.com/ezra0619/FEM-coding-bootcamp-testimonials-slider"
        },
        {
          key: "challengeNine",
          difficulty: 1,
          inspiration: "Front End Mentor",
          inspirationWebsite: "https://www.frontendmentor.io/",
          name: "Article Preview Component",
          challenge: '9th Challenge',
          projectImage: "challengeNine.jpg",
          technologies: [ 
            {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
            {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
            {imgName: 'sassIcon.svg', imgAlt: 'SASS'},
            {imgName: 'jsIcon.svg', imgAlt: 'JavaScript'},
            {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
          ],
          siteLink: "/projects/FEM-article-preview-component",
          // gitHubLink: "https://github.com/ezra0619/FEM-article-preview-component"
        },
        {
          key: "challengeEight",
          difficulty: 2,
          inspiration: "Front End Mentor",
          inspirationWebsite: "https://www.frontendmentor.io/",
          name: "Fylo Data Storage Component",
          challenge: '8th Challenge',
          projectImage: "challengeEight.jpg",
          technologies: [ 
            {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
            {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
            {imgName: 'sassIcon.svg', imgAlt: 'SASS'},
            {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
          ],
          siteLink: "/projects/FEM-fylo-data-storage",
          // gitHubLink: "https://github.com/ezra0619/FEM-fylo-data-storage"
        },
        {
          key: "challengeSeven",
          difficulty: 3,
          inspiration: "Front End Mentor",
          inspirationWebsite: "https://www.frontendmentor.io/",
          name: "Url Shortening Api Master Page",
          challenge: '7th Challenge',
          projectImage: "challengeSeven.jpg",
          technologies: [ 
            {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
            {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
            {imgName: 'sassIcon.svg', imgAlt: 'SASS'},
            {imgName: 'jsIcon.svg', imgAlt: 'JavaScript'},
            {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
          ],
          siteLink: "/projects/FEM-url-shortening-api-master",
          // gitHubLink: "https://github.com/ezra0619/FEM-url-shortening-api-master"
        },
        {
          key: "challengeSix",
          difficulty: 1,
          inspiration: "Front End Mentor",
          inspirationWebsite: "https://www.frontendmentor.io/",
          name: "Intro component with sign-up form",
          challenge: '6th Challenge',
          projectImage: "challengeSix.jpg",
          technologies: [ 
            {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
            {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
            {imgName: 'sassIcon.svg', imgAlt: 'SASS'},
            {imgName: 'bootstrapIcon.svg', imgAlt: 'Bootstrap'},
            {imgName: 'jsIcon.svg', imgAlt: 'JavaScript'},
            {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
          ],
          siteLink: "/projects/FEM-intro-component-with-signup-form-master",
          // gitHubLink: "https://github.com/ezra0619/FEM-intro-component-with-signup-form-master"
        },
        {
          key: "challengeFive",
          difficulty: 1,
          inspiration: "Front End Mentor",
          inspirationWebsite: "https://www.frontendmentor.io/",
          name: "Base Apparel coming soon page",
          challenge: '5th Challenge',
          projectImage: "challengeFive.jpg",
          technologies: [ 
            {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
            {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
            {imgName: 'jsIcon.svg', imgAlt: 'JavaScript'},
            {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
          ],
          siteLink: "/projects/FEM-base-apparel-coming-soon-master",
          // gitHubLink: "https://github.com/ezra0619/FEM-base-apparel-coming-soon-master"
        },
        {
          key: "challengeFour",
          difficulty: 1,
          inspiration: "Front End Mentor",
          inspirationWebsite: "https://www.frontendmentor.io/",
          name: "Single price grid component",
          challenge: '4th Challenge',
          projectImage: "challengeFour.jpg",
          technologies: [ 
            {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
            {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
            {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
          ],
          siteLink: "/projects/FEM-single-price-grid-component-master",
          // gitHubLink: "https://github.com/ezra0619/FEM-single-price-grid-component-master"
        },
        {
          key: "challengeThree",
          difficulty: 2,
          inspiration: "Front End Mentor",
          inspirationWebsite: "https://www.frontendmentor.io/",
          name: "Huddle landing page with alternating feature blocks",
          challenge: '3rd Challenge',
          projectImage: "challengeThree.jpg",
          technologies: [ 
            {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
            {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
            {imgName: 'sassIcon.svg', imgAlt: 'SASS'},
            {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
          ],
          siteLink: "/projects/FEM-huddle-landing-page-with-alternating-feature-blocks-master",
          // gitHubLink: "https://github.com/ezra0619/FEM-huddle-landing-page-with-alternating-feature-blocks-master"
        },
        {
          key: "challengeTwo",
          difficulty: 1,
          inspiration: "Front End Mentor",
          inspirationWebsite: "https://www.frontendmentor.io/",
          name: "Ping single column coming soon page",
          challenge: '2nd Challenge',
          projectImage: "challengeTwo.jpg",
          technologies: [ 
            {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
            {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
            {imgName: 'jsIcon.svg', imgAlt: 'JavaScript'},
            {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
          ],
          siteLink: "/projects/FEM-ping-coming-soon-page-master",
          // gitHubLink: "https://github.com/ezra0619/FEM-ping-coming-soon-page-master"
        },
        {
          key: "challengeOne",
          difficulty: 1,
          inspiration: "Front End Mentor",
          inspirationWebsite: "https://www.frontendmentor.io/",
          name: "Four card feature section",
          challenge: '1st Challenge',
          projectImage: "challengeOne.jpg",
          technologies: [ 
            {imgName: 'htmlIcon.svg', imgAlt: 'Html'},
            {imgName: 'cssIcon.svg', imgAlt: 'CSS'},
            {imgName: 'angularIcon.svg', imgAlt: 'Angular'}
          ],
          siteLink: "/projects/FEM-four-card-feature-section",
          // gitHubLink: "https://github.com/ezra0619/FEM-four-card-feature-section"
        }
      ]
        // {
        //   key: "certificationProjectOne",
        //   inspiration: "Free Code Camp",
        //   inspirationWebsite: "https://www.freecodecamp.org/",
        //   name: "Quote Generator",
        //   challenge: '1st React Project',
        //   projectImage: reactOneImg,
        //   technologies: [htmlIcon, cssIcon, jsIcon, sassIcon, reactIcon],
        //   siteLink: "/projects/fcc-quote-generator",
        //   gitHubLink: "https://github.com/ezra0619/fcc-quote-generator"
        // },
        // {
        //   key: "certificationProjectTwo",
        //   inspiration: "Free Code Camp",
        //   inspirationWebsite: "https://www.freecodecamp.org/",
        //   name: "Markdown Previewer",
        //   challenge: '2nd React Project',
        //   projectImage: reactTwoImg,
        //   technologies: [htmlIcon, cssIcon, jsIcon, sassIcon, reactIcon],
        //   siteLink: "/projects/fcc-markdown-previewer",
        //   gitHubLink: "https://github.com/ezra0619/fcc-markdown-previewer"
        // },
        // {
        //   key: "certificationProjectThree",
        //   inspiration: "Free Code Camp",
        //   inspirationWebsite: "https://www.freecodecamp.org/",
        //   name: "Drum Machine",
        //   challenge: '3rd React Project',
        //   projectImage: reactThreeImg,
        //   technologies: [htmlIcon, cssIcon, jsIcon, sassIcon, bootstrapIcon, reactIcon],
        //   siteLink: "/projects/fcc-drum-machine",
        //   gitHubLink: "https://github.com/ezra0619/fcc-drum-machine"
        // },
        // {
        //   key: "certificationProjectFour",
        //   inspiration: "Free Code Camp",
        //   inspirationWebsite: "https://www.freecodecamp.org/",
        //   name: "JavaScript Calculator",
        //   challenge: '4th React Project',
        //   projectImage: reactFourImg,
        //   technologies: [htmlIcon, cssIcon, sassIcon, bootstrapIcon, jsIcon, reactIcon],
        //   siteLink: "/projects/fcc-js-calculator",
        //   gitHubLink: "https://github.com/ezra0619/fcc-js-calculator"
        // },
        // {
        //   key: "certificationProjectFive",
        //   inspiration: "Free Code Camp",
        //   inspirationWebsite: "https://www.freecodecamp.org/",
        //   name: "Pomodoro Clock",
        //   challenge: '5th React Project',
        //   projectImage: reactFiveImg,
        //   technologies: [htmlIcon, cssIcon, jsIcon, sassIcon, bootstrapIcon, reactIcon],
        //   siteLink: "/projects/fcc-pomodoro-clock",
        //   gitHubLink: "https://github.com/ezra0619/fcc-pomodoro-clock"
        // }

    getLiveProjects(){
        return this.liveProjects;
    }

    getOfflineProjects(){
        return this.offlineProjects;
    }
}