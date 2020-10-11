import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorAddComponent } from './author-add/author-add.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';

import { AuthorsComponent } from './authors.component';
// { path: 'hero/:id',      component: HeroDetailComponent },
const routes: Routes = [{ path: '', component: AuthorsComponent },
{ path: 'edit/:id', component: AuthorEditComponent },
{ path: 'new', component: AuthorAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
