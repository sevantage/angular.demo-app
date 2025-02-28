import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'double',
    standalone: false
})
export class DoublePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value * 2;
  }

}
