import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-mainpage-projects',
  templateUrl: './mainpage-projects.component.html',
  styleUrls: ['./mainpage-projects.component.scss'],
  providers: [ProjectsService]
})
export class MainpageProjectsComponent implements OnInit {

  //same interfaces as the objects described in the ProjectsService - interfaces are defined there;
  public liveProjects: {key: string, company: string, projectName: string, projectImage: string, technologies: {imgName: string, imgAlt: string}[], siteLink: string}[] = [];
  public offlineProjects: {key: string, inspiration: string, inspirationWebsite: string, name: string, challenge: string, projectImage: string, technologies: {imgName: string, imgAlt: string}[], siteLink: string, gitHubLink: string}[] = [];
  // websiteDomain: string = "https:{key: string, inspiration: string, inspirationWebsite: string, name: string, challenge: string, projectImage: string, technologies: {imgName: string, imgAlt: string}[], siteLink: string, gitHubLink: string}[]//andreeabociu.com/#";
  
  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.liveProjects = this.projectsService.getLiveProjects();
    this.offlineProjects = this.projectsService.getOfflineProjects();
  }

}
