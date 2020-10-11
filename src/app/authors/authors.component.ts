import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

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
    this.router.navigate(['edit',data.key],{relativeTo: this.activatedRoute});
  }
  onAdd(){
    this.router.navigate(["new"],{relativeTo: this.activatedRoute});
  }
  onSelectionChanged(row){

  }
}
