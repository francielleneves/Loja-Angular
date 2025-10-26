import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availability'
})
export class AvailabilityPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Disponivel em estoque' : 'Produto  Indisponivel';
  }

}
