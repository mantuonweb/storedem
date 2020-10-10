import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'modal-course-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class ModalCourseEditComponent implements OnInit {
  course
  courseForm = new FormGroup({
    course: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl('')
  });
  public onSuccess: Subject<boolean>;
  constructor(public bsModalRef: BsModalRef) {
    this.onSuccess = new Subject();
  }
 
  ngOnInit() {
    this.courseForm.patchValue(this.course);
  }
  save(){
    this.onSuccess.next(true);
    this.bsModalRef.hide();
  }
  cancel(){
    this.onSuccess.next(false);
    this.bsModalRef.hide();
  }

}
