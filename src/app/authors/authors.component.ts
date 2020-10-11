import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  columnDefs = [
    { field: 'course' },
    { field: 'author' },
    { field: 'price' }
  ];
  rowData$;
  gridApi;
  gridColumnApi;
  bsModalRef;
  selectedRows;
  selectLoading$;
  rowData = [];
  constructor() { }

  ngOnInit(): void {
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    setTimeout(() => {
      this.gridApi.sizeColumnsToFit();
    }, 0);
  }
  onRowEdit(params){

  }
  onSelectionChanged(row){

  }
}
