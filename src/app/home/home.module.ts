import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AgGridModule } from 'ag-grid-angular';
import { StoreModule } from '@ngrx/store';
import * as fromHome from './store/reducers/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/effects/home.effects';
import { HomeService } from './home.service';
import { AppBootStrapHelperModule } from '../components/app-boot-strap-helper/app-boot-strap-helper.module';
import { ModalCourseEditComponent } from './edit/edit.component';
import { ModalCourseAddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  providers:[HomeService],
  declarations: [HomeComponent, ModalCourseEditComponent, ModalCourseAddComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    HomeRoutingModule,
    // ng generate @ngrx/schematics:feature home/store/Home -m home/home.module.ts --group
    StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.reducer),
    EffectsModule.forFeature([HomeEffects]),
    AppBootStrapHelperModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
