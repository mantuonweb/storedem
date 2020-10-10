import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from './store/reducers/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './store/effects/login.effects';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    //ng generate @ngrx/schematics:feature login/store/Login -m login/login.module.ts --group
    StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.reducer),
    EffectsModule.forFeature([LoginEffects])
  ]
})
export class LoginModule { }
