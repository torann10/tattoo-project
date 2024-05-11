import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyReservationsRoutingModule } from './my-reservations-routing.module';
import { MyReservationsComponent } from './my-reservations.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    MyReservationsComponent
  ],
  imports: [
    CommonModule,
    MyReservationsRoutingModule,
    MatTableModule
  ]
})
export class MyReservationsModule { }
