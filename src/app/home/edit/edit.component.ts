import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/internal/Subject';
import { courseEdit } from '../store/actions/home.actions';
import { State } from '../store/reducers/home.reducer';

@Component({
  selector: 'modal-course-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class ModalCourseEditComponent implements OnInit {
  course;
  courseForm = new FormGroup({
    course: new FormControl('',Validators.required),
    author: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required)
  });
  public onSuccess: Subject<boolean>;
  constructor(public bsModalRef: BsModalRef,private store: Store<State>) {
    this.onSuccess = new Subject();
  }
 
  ngOnInit() {
    this.courseForm.patchValue(this.course);
  }
  save(){
    this.store.dispatch(courseEdit({course:this.courseForm.value}))
    this.onSuccess.next(true);
    this.bsModalRef.hide();
  }
  cancel(){
    this.onSuccess.next(false);
    this.bsModalRef.hide();
  }

}
