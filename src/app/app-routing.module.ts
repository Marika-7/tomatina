import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'delivery', 
    loadChildren: () => import('./pages/delivery/delivery.module').then(n => n.DeliveryModule)
  },
  {
    path: 'about', 
    loadChildren: () => import('./pages/about/about.module').then(n => n.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
