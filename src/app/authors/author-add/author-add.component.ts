import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../store/reducers/author.reducer';

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
  selectSave$;
  constructor(
    private store: Store<State>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  onSave(){

  }

}
