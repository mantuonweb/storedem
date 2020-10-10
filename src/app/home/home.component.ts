import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { ModalCourseAddComponent } from './add/add.component';
import { ModalCourseEditComponent } from './edit/edit.component';
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
    { field: 'course' },
    { field: 'author' },
    { field: 'price' }
  ];
  rowData$;
  gridApi;
  gridColumnApi;
  bsModalRef;
  selectedRows
  constructor(private store: Store<State>, private router: Router, private modalService: BsModalService) {
    this.rowData$ = this.store.select(selectCourses);
  }

  ngOnInit(): void {
    this.store.dispatch(loadHomes())
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    setTimeout(() => {
      this.gridApi.sizeColumnsToFit();
    }, 0);
  }
  openModalWithComponent(course) {
    const initialState = {
      course
    };
    this.bsModalRef = this.modalService.show(ModalCourseEditComponent, { initialState });
    this.bsModalRef.onHide.pipe(take(1)).subscribe((e)=>{
      console.log(e)
    });
    // this.bsModalRef.content.course = course;
    // this.bsModalRef.content.closeBtnName = 'Close';
  }
  onEditHide(e){
    console.log(e)
  }
  onSelectionChanged(params) {
    this.selectedRows = this.gridApi.getSelectedRows();
  }
  onRowEdit({ data }) {
    console.log(data);
    this.openModalWithComponent(data);
  }
  addCourse(){
    this.bsModalRef = this.modalService.show(ModalCourseAddComponent);
  }
}
