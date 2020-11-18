import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorComponent } from './visitor.component';
import { VisitorHomeScreenComponent } from './screens/visitor-home-screen/visitor-home-screen.component';
import { VisitorAcercaDeComponent } from './screens/visitor-acerca-de/visitor-acerca-de.component';
import { VisitorContactosComponent } from './screens/visitor-contactos/visitor-contactos.component';
import { VisitorInicioSesionComponent } from './screens/visitor-inicio-sesion/visitor-inicio-sesion.component';

const routes: Routes = [

  {
    path: '',
    component: VisitorComponent,
    children: [
      { path: 'home', component: VisitorHomeScreenComponent },
      { path: 'acerca-de', component: VisitorAcercaDeComponent },
      { path: 'contactos', component: VisitorContactosComponent },
      { path: 'iniciar-sesion', component: VisitorInicioSesionComponent},
    ]
  } 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
