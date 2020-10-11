import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.scss']
})
export class AuthorAddComponent implements OnInit {
  authorForm = new FormGroup({
    name: new FormControl('',Validators.required),
    expertize: new FormControl('',Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }
  onSave(){

  }

}
