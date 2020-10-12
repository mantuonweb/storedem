import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { AuthorsData } from "./authors-data";

@Injectable()
export class AuthorService {
  constructor() {}
  getAuthors() {
    return of(AuthorsData).pipe(delay(1000));
  }
  saveAuthor(data) {
    return of(data).pipe(delay(1000));
  }
  editAuthor(data) {
    return of(data).pipe(delay(1000));
  }
}
