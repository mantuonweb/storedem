import { Component, OnInit } from '@angular/core';
import { AuthorsData } from './authors-data';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  columnDefs = [
    { field: 'key' },
    { field: 'familyname' },
    { field: 'familyname' }
  ];
  rowData$;
  gridApi;
  gridColumnApi;
  bsModalRef;
  selectedRows;
  selectLoading$;
  rowData = AuthorsData;
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
  onRowEdit({ data }) {
    console.log(data);
    // this.openModalWithComponent(data);
  }
  onSelectionChanged(row){

  }
}
