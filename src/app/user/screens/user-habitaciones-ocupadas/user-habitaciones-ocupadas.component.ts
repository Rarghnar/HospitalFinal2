import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../core/models/paciente.model';
import { PacienteService } from '../../../core/providers/paciente/paciente.service';


@Component({
  selector: 'app-user-habitaciones-ocupadas',
  templateUrl: './user-habitaciones-ocupadas.component.html',
  styleUrls: ['./user-habitaciones-ocupadas.component.less']
})
export class UserHabitacionesOcupadasComponent implements OnInit {

  public pacientes$: Paciente[];

  constructor(private pacienteService: PacienteService){}

  ngOnInit(): void {
    //this.pacientes = this.pacienteService.getALLPacientes();
  }

}
