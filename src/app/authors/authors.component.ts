import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadAuthors } from './store/actions/author.actions';
import { State } from './store/reducers/author.reducer';
import { selectAuthors, selectAuthorsLoading } from './store/selectors/author.selectors';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  columnDefs = [
    { field: 'id' },
    { field: 'name' },
    { field: 'expertize' }
  ];
  rowData$;
  gridApi;
  gridColumnApi;
  bsModalRef;
  selectedRows;
  selectLoading$;
  constructor(private router:Router,private store: Store<State>,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.store.dispatch(loadAuthors());
    this.rowData$ = this.store.select(selectAuthors);
    this.selectLoading$ = this.store.select(selectAuthorsLoading);
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    setTimeout(() => {
      this.gridApi.sizeColumnsToFit();
    }, 0);
  }
  onRowEdit({ data }) {
    this.router.navigate(['edit',data.id],{relativeTo: this.activatedRoute});
  }
  onAdd(){
    this.router.navigate(["new"],{relativeTo: this.activatedRoute});
  }
  onSelectionChanged(params){

  }
}
