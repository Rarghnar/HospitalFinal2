import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AdmHomeScreenComponent } from './screens/adm-home-screen/adm-home-screen.component';
import { AdmAcercaDeComponent } from './screens/adm-acerca-de/adm-acerca-de.component';
import { AdmContactosComponent } from './screens/adm-contactos/adm-contactos.component';
import { AdmHabitacionesLibresComponent } from './screens/adm-habitaciones-libres/adm-habitaciones-libres.component';
import { AdmHabitacionesOcupadasComponent } from './screens/adm-habitaciones-ocupadas/adm-habitaciones-ocupadas.component';
import { AdmInfoPacienteComponent } from './screens/adm-info-paciente/adm-info-paciente.component';
import { AdmListaPacienteComponent } from './screens/adm-lista-paciente/adm-lista-paciente.component';
import { AdmPacienteComponent } from './screens/adm-paciente/adm-paciente.component';
import { AdmPaciente2Component } from './screens/adm-paciente2/adm-paciente2.component';
import { AdmRegistrarEnferComponent } from './screens/adm-registrar-enfer/adm-registrar-enfer.component';
import { AdmRegistrarMedicComponent } from './screens/adm-registrar-medic/adm-registrar-medic.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'home', component: AdmHomeScreenComponent },
      { path: 'acerca-de', component: AdmAcercaDeComponent },
      { path: 'contactos', component: AdmContactosComponent },
      { path: 'habitaciones-libres', component: AdmHabitacionesLibresComponent },
      { path: 'habitaciones-ocupadas', component: AdmHabitacionesOcupadasComponent },
      { path: 'info-paciente', component: AdmInfoPacienteComponent },
      { path: 'lista-paciente', component: AdmListaPacienteComponent },
      { path: 'paciente', component: AdmPacienteComponent },
      { path: 'paciente2', component: AdmPaciente2Component },
      { path: 'registrar-enfer', component: AdmRegistrarEnferComponent },
      { path: 'registrar-medic', component: AdmRegistrarMedicComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
