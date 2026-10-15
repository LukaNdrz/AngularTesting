import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    return value<0? "₾0.00": `₾${value.toFixed(2)}`
  }

}
