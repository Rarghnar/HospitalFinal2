import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserHomeScreenComponent } from './screens/user-home-screen/user-home-screen.component';
import { UserAcercaDeComponent } from './screens/user-acerca-de/user-acerca-de.component';
import { UserContactosComponent } from './screens/user-contactos/user-contactos.component';
import { UserHabitacionesLibresComponent } from './screens/user-habitaciones-libres/user-habitaciones-libres.component';
import { UserHabitacionesOcupadasComponent } from './screens/user-habitaciones-ocupadas/user-habitaciones-ocupadas.component';
import { UserInfoPacienteComponent } from './screens/user-info-paciente/user-info-paciente.component';
import { UserListaPacienteComponent } from './screens/user-lista-paciente/user-lista-paciente.component';
import { UserPacienteComponent } from './screens/user-paciente/user-paciente.component';
import { UserPaciente2Component } from './screens/user-paciente2/user-paciente2.component';
import { UserPerfileComponent } from './screens/user-perfile/user-perfile.component';
import { UserListScreenComponent } from './screens/user-list-screen/user-list-screen.component';
import { UserCheckearPacienteComponent } from './screens/user-checkear-paciente/user-checkear-paciente.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'home', component: UserHomeScreenComponent },
      { path: 'acerca-de', component: UserAcercaDeComponent },
      { path: 'contactos', component: UserContactosComponent },
      { path: 'habitaciones-libres', component: UserHabitacionesLibresComponent },
      { path: 'habitaciones-ocupadas', component: UserHabitacionesOcupadasComponent },
      { path: 'info-paciente', component: UserInfoPacienteComponent },
      { path: 'lista-paciente', component: UserListaPacienteComponent },
      { path: 'paciente', component: UserPacienteComponent },
      { path: 'paciente2', component: UserPaciente2Component },
      { path: 'info-paciente/:id', component: UserInfoPacienteComponent },
      { path: 'perfil', component: UserPerfileComponent },
      { path: 'list', component: UserListScreenComponent},
      { path: 'check-paciente/:id', component: UserCheckearPacienteComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
