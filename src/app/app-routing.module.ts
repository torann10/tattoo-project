import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { 
    path: 'main', 
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) 
  },
  { 
    path: 'care', 
    loadChildren: () => import('./pages/care/care.module').then(m => m.CareModule) 
  },
  { 
    path: 'not-found', 
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'register', 
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) 
  },
  { 
    path: 'reservations', 
    loadChildren: () => import('./pages/reservation-table/reservation-table.module').then(m => m.ReservationTableModule),
    canActivateChild: [AuthGuard]
  },
  { 
    path: 'my-reservations', 
    loadChildren: () => import('./pages/my-reservations/my-reservations.module').then(m => m.MyReservationsModule),
    canActivateChild: [AuthGuard]
  },
  { 
    path: '', 
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    redirectTo: '/not-found'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

