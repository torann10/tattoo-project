import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberTimePipe } from './number-time.pipe';



@NgModule({
  declarations: [
    NumberTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberTimePipe
  ]
})
export class PipesModule { }
