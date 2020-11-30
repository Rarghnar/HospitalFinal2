import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../../../core/models/paciente.model';
import { PacienteService } from '../../../core/providers/paciente/paciente.service';


@Component({
  selector: 'app-user-habitaciones-ocupadas',
  templateUrl: './user-habitaciones-ocupadas.component.html',
  styleUrls: ['./user-habitaciones-ocupadas.component.less']
})
export class UserHabitacionesOcupadasComponent implements OnInit {

  public pacientes$: Observable <Paciente[]>;

  constructor(private pacienteProvider: PacienteService){
    this.pacientes$ = this.getPaciente();

  }

  getPaciente(): Observable<Paciente[]> {
    return this.pacienteProvider.getPaciente();
  }

  ngOnInit(): void {
    //this.pacientes = this.pacienteService.getALLPacientes();
  }

}
