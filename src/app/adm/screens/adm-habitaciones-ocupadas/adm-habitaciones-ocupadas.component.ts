import { Component, OnInit } from '@angular/core';
import { Paciente } from '@core/models/paciente.model';
import { PacienteService } from '../../../core/providers/paciente/paciente.service';

@Component({
  selector: 'app-adm-habitaciones-ocupadas',
  templateUrl: './adm-habitaciones-ocupadas.component.html',
  styleUrls: ['./adm-habitaciones-ocupadas.component.less']
})
export class AdmHabitacionesOcupadasComponent implements OnInit {

  public pacientes: Paciente[];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    //this.pacientes = this.pacienteService.getALLPacientes();
  }

}
