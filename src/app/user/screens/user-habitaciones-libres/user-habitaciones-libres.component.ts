import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../../core/models/paciente.model';
import { Observable } from 'rxjs';
import { PacienteService } from '../../../core/providers/paciente/paciente.service';
import { Cama } from '../../../core/models/cama.model';
import { CamaService } from '../../../core/providers/cama/cama.service';

@Component({
  selector: 'app-user-habitaciones-libres',
  templateUrl: './user-habitaciones-libres.component.html',
  styleUrls: ['./user-habitaciones-libres.component.less']
})
export class UserHabitacionesLibresComponent implements OnInit {

  public cama$: Observable<Cama[]>;

  constructor(private camaProvider: CamaService) { 
    this.cama$ = this.getCama();
  }

  ngOnInit(): void {
  }

  getCama(): Observable<Cama[]> {
    return this.camaProvider.getCama();
  }

}
