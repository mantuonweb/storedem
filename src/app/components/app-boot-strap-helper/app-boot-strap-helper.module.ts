import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports:[ModalModule]
})
export class AppBootStrapHelperModule { }
