import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ch16Filter'
})
export class Ch16FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {

    if(value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value){

      if(item[propName].toLowerCase().indexOf(filterString.toLowerCase()) > -1) {
        resultArray.push(item);
      }

      // Below method for only matching complete matches
      // if(item[propName].toLowerCase() === filterString.toLowerCase()) {
      //   resultArray.push(item);
      // }
    }

    return resultArray;
  }

}
