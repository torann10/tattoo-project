import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareComponent } from './care.component';

const routes: Routes = [{ path: '', component: CareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareRoutingModule { }
