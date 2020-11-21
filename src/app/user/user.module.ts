import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { UserAcercaDeComponent } from './screens/user-acerca-de/user-acerca-de.component';
import { UserContactosComponent } from './screens/user-contactos/user-contactos.component';
import { UserHabitacionesOcupadasComponent } from './screens/user-habitaciones-ocupadas/user-habitaciones-ocupadas.component';
import { UserHabitacionesLibresComponent } from './screens/user-habitaciones-libres/user-habitaciones-libres.component';
import { UserPacienteComponent } from './screens/user-paciente/user-paciente.component';
import { UserListaPacienteComponent } from './screens/user-lista-paciente/user-lista-paciente.component';
import { UserInfoPacienteComponent } from './screens/user-info-paciente/user-info-paciente.component';
import { UserPaciente2Component } from './screens/user-paciente2/user-paciente2.component';
import { SidebarUserComponent } from './components/sidebar-user/sidebar-user.component';
import { UserHomeScreenComponent } from './screens/user-home-screen/user-home-screen.component';
import { UserChequearPacienteComponent } from './screens/user-chequear-paciente/user-chequear-paciente.component';

const component = [
  UserComponent, UserAcercaDeComponent, UserContactosComponent, UserHabitacionesOcupadasComponent,
  UserHabitacionesLibresComponent, UserPacienteComponent, UserListaPacienteComponent,
  UserInfoPacienteComponent, UserPaciente2Component, SidebarUserComponent, UserHomeScreenComponent
]


@NgModule({
   imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ],
  declarations: [...component, UserChequearPacienteComponent]
})
export class UserModule { }
