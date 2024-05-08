import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareRoutingModule } from './care-routing.module';
import { CareComponent } from './care.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CareComponent
  ],
  imports: [
    CommonModule,
    CareRoutingModule,
    MatCardModule
  ]
})
export class CareModule { }
