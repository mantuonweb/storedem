import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class HomeService {

  constructor() { }
  getCaurses(){
    let rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];
    return of(rowData)
  }
}
