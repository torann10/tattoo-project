import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberTime'
})
export class NumberTimePipe implements PipeTransform {

  transform(value: number): string {
    return `${value}:00`;
  }

}
