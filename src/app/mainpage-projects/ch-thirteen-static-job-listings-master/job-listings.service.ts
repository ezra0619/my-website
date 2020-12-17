import { Injectable } from '@angular/core';
import { JobListingItem } from './job-listing.model';

Injectable({
    providedIn: 'root'
})

export class JobListingService {

    private jobListings: JobListingItem[] = [
        {
            id: 1,
            company: "Photosnap",
            logo: "assets/chThirteen-static-job-listings-master/photosnap.svg",
            new: true,
            featured: true,
            position: "Senior Frontend Developer",
            role: "Frontend",
            level: "Senior",
            postedAt: "1d ago",
            contract: "Full Time",
            location: "USA Only",
            languages: ["HTML", "CSS", "JavaScript"],
            tools: []
          },
          {
            id: 2,
            company: "Manage",
            logo: "assets/chThirteen-static-job-listings-master/manage.svg",
            new: true,
            featured: true,
            position: "Fullstack Developer",
            role: "Fullstack",
            level: "Midweight",
            postedAt: "1d ago",
            contract: "Part Time",
            location: "Remote",
            languages: ["Python"],
            tools: ["React"]
          },
          {
            id: 3,
            company: "Account",
            logo: "assets/chThirteen-static-job-listings-master/account.svg",
            new: true,
            featured: false,
            position: "Junior Frontend Developer",
            role: "Frontend",
            level: "Junior",
            postedAt: "2d ago",
            contract: "Part Time",
            location: "USA Only",
            languages: ["JavaScript"],
            tools: ["React", "Sass"]
          },
          {
            id: 4,
            company: "MyHome",
            logo: "assets/chThirteen-static-job-listings-master/myhome.svg",
            new: false,
            featured: false,
            position: "Junior Frontend Developer",
            role: "Frontend",
            level: "Junior",
            postedAt: "5d ago",
            contract: "Contract",
            location: "USA Only",
            languages: ["CSS", "JavaScript"],
            tools: []
          },
          {
            id: 5,
            company: "Loop Studios",
            logo: "assets/chThirteen-static-job-listings-master/loop-studios.svg",
            new: false,
            featured: false,
            position: "Software Engineer",
            role: "FullStack",
            level: "Midweight",
            postedAt: "1w ago",
            contract: "Full Time",
            location: "Worldwide",
            languages: ["JavaScript"],
            tools: ["Ruby", "Sass"]
          },
          {
            id: 6,
            company: "FaceIt",
            logo: "assets/chThirteen-static-job-listings-master/faceit.svg",
            new: false,
            featured: false,
            position: "Junior Backend Developer",
            role: "Backend",
            level: "Junior",
            postedAt: "2w ago",
            contract: "Full Time",
            location: "UK Only",
            languages: ["Ruby"],
            tools: ["RoR"]
          },
          {
            id: 7,
            company: "Shortly",
            logo: "assets/chThirteen-static-job-listings-master/shortly.svg",
            new: false,
            featured: false,
            position: "Junior Developer",
            role: "Frontend",
            level: "Junior",
            postedAt: "2w ago",
            contract: "Full Time",
            location: "Worldwide",
            languages: ["HTML", "JavaScript"],
            tools: ["Sass"]
          },
          {
            id: 8,
            company: "Insure",
            logo: "assets/chThirteen-static-job-listings-master/insure.svg",
            new: false,
            featured: false,
            position: "Junior Frontend Developer",
            role: "Frontend",
            level: "Junior",
            postedAt: "2w ago",
            contract: "Full Time",
            location: "USA Only",
            languages: ["JavaScript"],
            tools: ["Vue", "Sass"]
          },
          {
            id: 9,
            company: "Eyecam Co.",
            logo: "assets/chThirteen-static-job-listings-master/eyecam-co.svg",
            new: false,
            featured: false,
            position: "Full Stack Engineer",
            role: "Fullstack",
            level: "Midweight",
            postedAt: "3w ago",
            contract: "Full Time",
            location: "Worldwide",
            languages: ["JavaScript", "Python"],
            tools: ["Django"]
          },
          {
            id: 10,
            company: "The Air Filter Company",
            logo: "assets/chThirteen-static-job-listings-master/the-air-filter-company.svg",
            new: false,
            featured: false,
            position: "Front-end Dev",
            role: "Frontend",
            level: "Junior",
            postedAt: "1mo ago",
            contract: "Part Time",
            location: "Worldwide",
            languages: ["JavaScript"],
            tools: ["React", "Sass"]
          }
    ]

    getJobListings(){
        return this.jobListings;
    }
}