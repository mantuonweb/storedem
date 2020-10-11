import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../store/reducers/author.reducer';
import { selectAuthorsById } from '../store/selectors/author.selectors';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {
  authorForm = new FormGroup({
    name: new FormControl('',Validators.required),
    expertize: new FormControl('',Validators.required)
  });
  author;
  constructor(private store: Store<State>,private router: Router,private route: ActivatedRoute) { 
    this.route.paramMap.subscribe(({params}:any) =>{
      this.store.select(selectAuthorsById(params.id)).subscribe((author)=>{
        this.author = author;
        this.authorForm.patchValue(this.author);
      })
    })
  }

  ngOnInit(): void {
    
  }
  onSave(){
    
  }

}
