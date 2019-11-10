import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<number>): Array<number> {
    let result: Array<number>;
    result = [...value];
    for (let i = 0; i < result.length - 1; i++) {
      for (let j = i + 1; j < result.length; j++) {
        if (result[i] > result[j]) {
          let temp = result[i];
          result[i] = result[j];
          result[j] = temp;
        }
      }
    }
    return result;
  }
}
