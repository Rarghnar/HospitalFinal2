import { Injectable } from '@angular/core';
import { Paciente } from '../../models/paciente.model';
import { PACIENTES } from './PACIENTES.const';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private pacientes: Paciente[];

  constructor() {
    this.pacientes = PACIENTES;
  }
  
  public getALLPacientes(): Paciente[]{
    return this.pacientes;
  }

  public getPacienteById(id: number) {
    return this.pacientes.find((paciente: Paciente) => paciente._id == id);
  }
}
