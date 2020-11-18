import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DangerButtonComponent } from './components/danger-button/danger-button.component';
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { FootersComponent } from './components/footers/footers.component';
import { FormularioAgregarPacienteComponent } from './components/formulario-agregar-paciente/formulario-agregar-paciente.component';
import { FormularioAgregarPacientePart2Component } from './components/formulario-agregar-paciente-part2/formulario-agregar-paciente-part2.component';

const componets = [
  NavbarComponent, DangerButtonComponent, NavbarUserComponent, FootersComponent,
  FormularioAgregarPacienteComponent, FormularioAgregarPacientePart2Component
  
]

@NgModule({
  declarations: [...componets],
  imports: [
    CommonModule
  ],
  exports: [...componets]
})
export class SharedModule { }
