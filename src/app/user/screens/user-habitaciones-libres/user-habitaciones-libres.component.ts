import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../core/models/paciente.model';
import { Observable } from 'rxjs';
import { PacienteService } from '../../../core/providers/paciente/paciente.service';

@Component({
  selector: 'app-user-habitaciones-libres',
  templateUrl: './user-habitaciones-libres.component.html',
  styleUrls: ['./user-habitaciones-libres.component.less']
})
export class UserHabitacionesLibresComponent implements OnInit {

  public pacientes$: Observable<Paciente[]>;

  constructor(private pacienteProvider: PacienteService) { 
    this.pacientes$ = this.getPaciente();
  }

  getPaciente(): Observable<Paciente[]> {
    return this.pacienteProvider.getPaciente();
  }

  ngOnInit(): void {
  }

 

}
