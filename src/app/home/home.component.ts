import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadHomes } from './store/actions/home.actions';
import { State } from './store/reducers/home.reducer';
import { selectCourses } from './store/selectors/home.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];
  rowData$;
  gridApi;
  gridColumnApi;
  constructor(private store: Store<State>, private router: Router) {
    this.rowData$ = this.store.select(selectCourses);
  }

  ngOnInit(): void {
    this.store.dispatch(loadHomes())
  }
  onGridReady(params){
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    setTimeout(()=>{
      this.gridApi.sizeColumnsToFit();
    },0);
  }
}
