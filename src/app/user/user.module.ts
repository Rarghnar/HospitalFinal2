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
import { UserCheckearPacienteComponent } from './screens/user-checkear-paciente/user-checkear-paciente.component';
import { UserPerfileComponent } from './screens/user-perfile/user-perfile.component';
import { SupportProviderService } from '../core/providers/support-provider.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListScreenComponent } from './screens/user-list-screen/user-list-screen.component';
import { SupportListComponent } from './components/support-list/support-list.component';
import { HabitacionService } from '../core/providers/habitacion/habitacion.service';
import { PacienteService } from '../core/providers/paciente/paciente.service';

const component = [
  UserComponent, UserAcercaDeComponent, UserContactosComponent, UserHabitacionesOcupadasComponent,
  UserHabitacionesLibresComponent, UserPacienteComponent, UserListaPacienteComponent,
  UserInfoPacienteComponent, UserPaciente2Component, SidebarUserComponent, UserHomeScreenComponent,
  UserCheckearPacienteComponent, UserPerfileComponent, UserListScreenComponent, SupportListComponent
]


@NgModule({
   imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ], providers: [
    HabitacionService,
    PacienteService
  ],
  declarations: [...component]
})
export class UserModule { }
