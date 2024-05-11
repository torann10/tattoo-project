import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationTableRoutingModule } from './reservation-table-routing.module';
import { ReservationTableComponent } from './reservation-table.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { PipesModule } from "../../shared/pipes/pipes.module";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        ReservationTableComponent
    ],
    providers: [
        MatDatepickerModule,
    ],
    imports: [
        CommonModule,
        MatDatepickerModule,
        MatCardModule,
        MatNativeDateModule,
        ReservationTableRoutingModule,
        MatChipsModule,
        PipesModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class ReservationTableModule { }
