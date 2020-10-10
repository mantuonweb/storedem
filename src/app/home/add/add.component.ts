import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

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
  public onSuccess: Subject<boolean>;
  constructor(public bsModalRef: BsModalRef) {
    this.onSuccess = new Subject();
  }
 
  ngOnInit() {
    // this.list.push('PROFIT!!!');
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
