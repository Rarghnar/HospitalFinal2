import { Component, OnInit } from '@angular/core';
import { Paciente } from '@core/models/paciente.model';
import { Observable } from 'rxjs';
import { PacienteService } from '../../../core/providers/paciente/paciente.service';

@Component({
  selector: 'app-adm-habitaciones-ocupadas',
  templateUrl: './adm-habitaciones-ocupadas.component.html',
  styleUrls: ['./adm-habitaciones-ocupadas.component.less']
})
export class AdmHabitacionesOcupadasComponent implements OnInit {

  public paciente$: Observable<Paciente[]>;

  constructor(private pacienteProvider: PacienteService) {
    this.paciente$ = this.getPaciente();

   }

  getPaciente (): Observable<Paciente[]>{
    return this.pacienteProvider.getPaciente();
  }

  ngOnInit(): void {
    //this.pacientes = this.pacienteService.getALLPacientes();
  }

}
