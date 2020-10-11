import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { courseSave, resetSaveStatus } from '../store/actions/home.actions';
import { State } from '../store/reducers/home.reducer';
import { selectCoursesLoading, selectCoursesSaved } from '../store/selectors/home.selectors';

@Component({
  selector: 'modal-course-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class ModalCourseAddComponent implements OnInit {
  course;
  courseForm = new FormGroup({
    course: new FormControl('',Validators.required),
    author: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required)
  });
  selectSave$;
  selectLoading$;
  public onSuccess: Subject<boolean>;
  constructor(public bsModalRef: BsModalRef,private store: Store<State>) {
    this.onSuccess = new Subject();
  }
 
  ngOnInit() {
    this.selectSave$ = this.store.select(selectCoursesSaved).subscribe((saved)=>{
      saved && this.onSave();
    });
    this.selectLoading$ = this.store.select(selectCoursesLoading);
  }
  save(){
    this.store.dispatch(courseSave({course:this.courseForm.value}));
  }
  onSave(){
    this.onSuccess.next(true);
    this.bsModalRef.hide();
  }
  cancel(){
    this.onSuccess.next(false);
    this.store.dispatch(resetSaveStatus());
    this.bsModalRef.hide();
  }
  ngOnDestroy(){
    this.selectSave$.unsubscribe();
  }
}
