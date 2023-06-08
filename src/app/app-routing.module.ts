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
  },
  {
    path: 'contact', 
    loadChildren: () => import('./pages/contact/contact.module').then(n => n.ContactModule)
  },
  {
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(n => n.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
