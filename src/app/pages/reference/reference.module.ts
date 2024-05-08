import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenceRoutingModule } from './reference-routing.module';
import { ReferenceComponent } from './reference.component';


@NgModule({
  declarations: [
    ReferenceComponent
  ],
  imports: [
    CommonModule,
    ReferenceRoutingModule
  ]
})
export class ReferenceModule { }
