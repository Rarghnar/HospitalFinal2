import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorComponent } from './visitor/visitor.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'visitor/home', pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule) 
  },
  {
    path: 'visitor',
    loadChildren: () => import('./visitor/visitor.module')
      .then(m => m.VisitorModule)
  },
  {
    path: 'adm',
    loadChildren: () => import('./adm/adm.module')
      .then(m => m.AdmModule)
  },
  {
    path: '**', redirectTo: 'visitor/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
