import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { FootersComponent } from './components/footers/footers.component';
import { ControlContainer, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PacienteCardComponent } from './components/pacientes/paciente-card/paciente-card.component';
import { PacienteCardFullComponent } from './components/pacientes/paciente-card-full/paciente-card-full.component';
import { PacienteCardLibreComponent } from './components/pacientes/paciente-card-libre/paciente-card-libre.component';
import { PacienteCardNombreComponent } from './components/pacientes/paciente-card-nombre/paciente-card-nombre.component';
import { FormularioAgregarPacienteComponent } from './components/formularios/formulario-agregar-paciente/formulario-agregar-paciente.component';
import { FormularioAgregarPacientePart2Component } from './components/formularios/formulario-agregar-paciente-part2/formulario-agregar-paciente-part2.component';
import { FormularioCheckearPacienteComponent } from './components/formularios/formulario-checkear-paciente/formulario-checkear-paciente.component';
import { RouterLink, RouterModule } from '@angular/router';
import { NavbarAdmComponent } from './components/navbar-adm/navbar-adm.component';
import { FormularioAgregarPacientePart1Component } from './components/formularios/formulario-agregar-paciente-part1/formulario-agregar-paciente-part1.component';

const componets = [
  NavbarComponent, NavbarUserComponent, FootersComponent,
  FormularioAgregarPacienteComponent, FormularioAgregarPacientePart2Component,
  PacienteCardComponent, PacienteCardFullComponent, PacienteCardLibreComponent,
  PacienteCardNombreComponent, FormularioCheckearPacienteComponent, NavbarAdmComponent,
  FormularioAgregarPacientePart1Component
]

@NgModule({
  declarations: [...componets],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [...componets]
})
export class SharedModule { }
