import { Pipe, PipeTransform } from '@angular/core';
import { JobListingItem } from './job-listing.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: JobListingItem[], filterValues: string[]): any {

    let itemsOfObjToBeFiltered = [];

    for(let i = 0; i < items.length; i++){
      let tempArray: String[] = [];
      tempArray.push(items[i].role);
      tempArray.push(items[i].level);
      if(items[i].languages.length >= 1){
        for(let j = 0; j < items[i].languages.length; j++){
          tempArray.push(items[i].languages[j])
        }
      }
      if(items[i].tools.length >= 1){
        for(let x = 0; x < items[i].tools.length; x++){
          tempArray.push(items[i].tools[x])
        }
      }
      itemsOfObjToBeFiltered.push(tempArray);

    }

    if(filterValues.length === 0){
      return items;
    }else {
      return items.filter( (item, index) => {
        for(let p = 0; p < filterValues.length; p++){
          if(itemsOfObjToBeFiltered[index].indexOf(filterValues[p]) > -1){
            //do nothing
          }else {
            return false
          }
        }
        return true;
      })
    }

  }

}

