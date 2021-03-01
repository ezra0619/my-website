import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByDiff'
})
export class SortByDiffPipe implements PipeTransform {

  transform(array: any): any[] {

    let difficulty = 'difficulty';
    //this sorting is descending from advanced to newbie

    array.sort((a: any, b: any) => {
      if (a[difficulty] > b[difficulty]) {
        return -1;
      } else if (a[difficulty] < b[difficulty]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
