import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyReservationsComponent } from './my-reservations.component';
import { AuthGuard } from '../../shared/services/auth.guard';

const routes: Routes = [{ path: '', component: MyReservationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyReservationsRoutingModule { }
