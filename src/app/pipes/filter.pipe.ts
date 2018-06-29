import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, fileredStatus : string, status : string): any {
    if(value.length == 0 || fileredStatus == "" ){
      return value;
    }
    let resultArray = [];
    for(let todo of value){
      if(todo[status] == fileredStatus){
        resultArray.push(todo);
      }
    }
    return resultArray;
  }

}
// ng g p pipes/filter --spec false