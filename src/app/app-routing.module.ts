import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/authguard.service';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'orders',canActivate: [AuthGuardService], loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'home',canActivate: [AuthGuardService], loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'authors',canActivate: [AuthGuardService], loadChildren: () => import('./authors/authors.module').then(m => m.AuthorsModule) },
  { path: '**', redirectTo: '/login' }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
