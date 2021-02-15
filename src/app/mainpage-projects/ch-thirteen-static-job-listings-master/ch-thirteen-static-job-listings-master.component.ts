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

  filterArray: String[] = [];
  constructor(private JobListingService: JobListingService) { }

  ngOnInit(): void {
    this.jobListingsArray = this.JobListingService.getJobListings();
  }
  
  addFilterValue(filterValue){
    if(this.filterArray.indexOf(filterValue) === -1){
      this.filterArray.push(filterValue);
    }else{
      //else do nothing
    }
  }

  clearFilter(){
    this.filterArray = [];
  }

  removeFilterValue(filterValue: String){
    this.filterArray.splice(this.filterArray.indexOf(filterValue),1);
  }

}
