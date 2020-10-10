import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

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
  constructor(public bsModalRef: BsModalRef) {
    console.log(this)
  }
 
  ngOnInit() {
    this.courseForm.patchValue(this.course);
    // console.log(this)
    // this.list.push('PROFIT!!!');
  }

}
