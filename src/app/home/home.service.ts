import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class HomeService {

  constructor() { }
  getCaurses() {
    let rowData = [
      { course: 'Let US C', author: 'Yashwant Kantetkar', price: 35000 },
      { course: 'Pointer With C', author: 'Yashwant Kantetkar', price: 32000 },
      { course: 'NGRX', author: 'Dunkin Hunter', price: 72000 }
    ];
    return of(rowData).pipe(delay(1000));
  }
  saveCourse(course) {
    return of(course).pipe(delay(1000));
  }
  editCourse(course) {
    return of(course).pipe(delay(1000));
  }
}
