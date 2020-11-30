import { Component, OnInit } from '@angular/core';
import { PacienteService } from '@core/providers/paciente/paciente.service';
import { Observable } from 'rxjs';
import { Paciente } from '../../../core/models/paciente.model';

@Component({
  selector: 'app-adm-habitaciones-libres',
  templateUrl: './adm-habitaciones-libres.component.html',
  styleUrls: ['./adm-habitaciones-libres.component.less']
})
export class AdmHabitacionesLibresComponent implements OnInit {

  public paciente$: Observable<Paciente[]>;

  constructor(private pacienteProvider: PacienteService) {
    this.paciente$ = this.getPaciente();
  
  }
   
    getPaciente(): Observable<Paciente[]> {
      return this.pacienteProvider.getPaciente();
    }
  

  ngOnInit(): void {
  }

}
