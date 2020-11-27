import { Component, OnInit } from '@angular/core';
import { Paciente } from '@core/models/paciente.model';
import { PacienteService } from '../../../core/providers/paciente/paciente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adm-lista-paciente',
  templateUrl: './adm-lista-paciente.component.html',
  styleUrls: ['./adm-lista-paciente.component.less']
})
export class AdmListaPacienteComponent implements OnInit {

  public pacientes$: Observable<Paciente[]>;

  constructor(private pacienteProvider: PacienteService) { 
    this.pacientes$ = this.getPaciente();
  }

  ngOnInit(): void {
  }

  getPaciente(): Observable<Paciente[]> {
    return this.pacienteProvider.getPaciente();
  }

}
