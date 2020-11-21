import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { SharedModule } from '../shared/shared.module';
import { VisitorComponent } from './visitor.component';
import { VisitorAcercaDeComponent } from './screens/visitor-acerca-de/visitor-acerca-de.component';
import { VisitorContactosComponent } from './screens/visitor-contactos/visitor-contactos.component';
import { VisitorInicioSesionComponent } from './screens/visitor-inicio-sesion/visitor-inicio-sesion.component';
import { InicioSesionUserComponent } from './components/inicio-sesion-user/inicio-sesion-user.component';
import { InicioSesionAdmComponent } from './components/inicio-sesion-adm/inicio-sesion-adm.component';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';


const component = [
  VisitorComponent, VisitorAcercaDeComponent, VisitorContactosComponent, VisitorInicioSesionComponent,
  InicioSesionUserComponent, InicioSesionAdmComponent,
]

@NgModule({
  imports: [
    CommonModule,
    VisitorRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [...component ]
})
export class VisitorModule { }
