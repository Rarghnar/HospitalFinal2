import { Injectable } from '@angular/core';
import { Medico } from '../../models/medico.model';
import { MEDICOS } from './MEDICOS.const';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private medicos: Medico[];

  constructor() {
    this.medicos = MEDICOS;
  }
  
  public getALLMedicos(): Medico[]{
    return this.medicos;
  }

  /*public getMedicoById(id: number) {
    return this.medicos.find((medico: Medico) => medico._id == id)
  }*/
}
