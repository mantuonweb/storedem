import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuthor from './store/reducers/author.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthorEffects } from './store/effects/author.effects';
import { AuthorService } from './author.service';
import { AgGridModule } from 'ag-grid-angular';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorAddComponent } from './author-add/author-add.component';


@NgModule({
  providers:[AuthorService],
  declarations: [AuthorsComponent, AuthorEditComponent, AuthorAddComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule,
    StoreModule.forFeature(fromAuthor.authorFeatureKey, fromAuthor.reducer),
    EffectsModule.forFeature([AuthorEffects]),
    AgGridModule.withComponents([])
  ]
})
export class AuthorsModule { }
