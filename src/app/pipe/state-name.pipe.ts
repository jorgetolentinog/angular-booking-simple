import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stateName',
})
export class StateNamePipe implements PipeTransform {
  transform(stateId: number): unknown {
    if (stateId === 1) {
      return 'Pendiente';
    } else if (stateId === 2) {
      return 'Confirmado';
    } else {
      return 'Cancelado';
    }
  }
}
