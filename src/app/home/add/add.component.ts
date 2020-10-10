import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-course-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class ModalCourseAddComponent implements OnInit {

  course
  courseForm = new FormGroup({
    course: new FormControl(''),
    author: new FormControl(''),
    price: new FormControl('')
  });
 
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    // this.list.push('PROFIT!!!');
  }

}
