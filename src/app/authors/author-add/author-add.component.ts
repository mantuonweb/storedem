import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { addAuthors, resetSaveStatus } from "../store/actions/author.actions";
import { State } from "../store/reducers/author.reducer";
import { selectAuthorSaved } from "../store/selectors/author.selectors";

@Component({
  selector: "app-author-add",
  templateUrl: "./author-add.component.html",
  styleUrls: ["./author-add.component.scss"]
})
export class AuthorAddComponent implements OnInit {
  authorForm = new FormGroup({
    name: new FormControl("", Validators.required),
    expertize: new FormControl("", Validators.required)
  });
  selectSave$;
  constructor(
    private store: Store<State>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.selectSave$ = this.store.select(selectAuthorSaved).subscribe(saved => {
      saved && this.onSave();
    });
  }
  save() {
    let author = this.authorForm.value;
    author.id = (new Date()).getTime();
    this.store.dispatch(addAuthors({ author }));
  }
  onSave() {
    this.store.dispatch(resetSaveStatus());
    this.router.navigate(["/../authors"], { relativeTo: this.activatedRoute });
  }
}
