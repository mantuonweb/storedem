import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
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
