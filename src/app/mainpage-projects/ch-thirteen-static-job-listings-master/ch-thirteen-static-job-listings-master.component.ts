import { Component, OnInit } from '@angular/core';
import { JobListingItem } from './job-listing.model';
import { JobListingService } from './job-listings.service';

@Component({
  selector: 'app-ch-thirteen-static-job-listings-master',
  templateUrl: './ch-thirteen-static-job-listings-master.component.html',
  styleUrls: ['./ch-thirteen-static-job-listings-master.component.scss'],
  providers: [JobListingService]
})
export class ChThirteenStaticJobListingsMasterComponent implements OnInit {

  jobListingsArray: JobListingItem[];
  constructor(private JobListingServie: JobListingService) { }

  ngOnInit(): void {
    this.jobListingsArray = this.JobListingServie.getJobListings();
  }
  

}
