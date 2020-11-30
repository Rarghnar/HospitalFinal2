import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacienteServiceService {

  constructor() { }

  public id: string;

  public getIdPaciente(id: string){
    this.id = id;
  }

  public sendIdPaciente(): string{
    return this.id;
  }
}
