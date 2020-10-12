import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { editAuthors,resetSaveStatus } from "../store/actions/author.actions";
import { State } from "../store/reducers/author.reducer";
import {
  selectAuthorsById,
  selectAuthorSaved
} from "../store/selectors/author.selectors";

@Component({
  selector: "app-author-edit",
  templateUrl: "./author-edit.component.html",
  styleUrls: ["./author-edit.component.scss"]
})
export class AuthorEditComponent implements OnInit {
  authorForm = new FormGroup({
    name: new FormControl("", Validators.required),
    expertize: new FormControl("", Validators.required)
  });
  author;
  selectSave$;
  constructor(
    private store: Store<State>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe(({ params }: any) => {
      this.store.select(selectAuthorsById(params.id)).subscribe(author => {
        this.author = author;
        this.authorForm.patchValue(this.author);
      });
    });
    this.selectSave$ = this.store.select(selectAuthorSaved).subscribe(saved => {
      saved && this.onSave();
    });
  }
  save() {
    let author = this.authorForm.value;
    author.id = this.author.id;
    this.store.dispatch(editAuthors({ author }));
  }
  ngOnInit(): void {}
  onSave() {
    this.store.dispatch(resetSaveStatus());
     this.router.navigate(['/../authors'],{relativeTo: this.activatedRoute});
  }
}
