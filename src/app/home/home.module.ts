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


@NgModule({
  providers:[HomeService],
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    HomeRoutingModule,
    // ng generate @ngrx/schematics:feature home/store/Home -m home/home.module.ts --group
    StoreModule.forFeature(fromHome.homeFeatureKey, fromHome.reducer),
    EffectsModule.forFeature([HomeEffects])
  ]
})
export class HomeModule { }
