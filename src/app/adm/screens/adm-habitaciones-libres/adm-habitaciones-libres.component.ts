import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../core/models/paciente.model';

@Component({
  selector: 'app-adm-habitaciones-libres',
  templateUrl: './adm-habitaciones-libres.component.html',
  styleUrls: ['./adm-habitaciones-libres.component.less']
})
export class AdmHabitacionesLibresComponent implements OnInit {

  public pacientes: Paciente[];

  constructor() {    }      

  ngOnInit(): void {
  }

}
