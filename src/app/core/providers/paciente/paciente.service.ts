import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Observable } from 'rxjs';
import { Paciente } from '../../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private httpService: HttpService) { }
  
  public getPaciente(): Observable<Paciente[]> {
    return this.httpService.get<Paciente[]>('/paciente/all');
  }
  
  public getPacienteById(id: string): Observable<Paciente | null> {
    return this.httpService.get<Paciente>('/paciente/:id')
  }


  public addPaciente(paciente: Partial<Paciente>) {
    return this.httpService.post<Paciente>('/paciente/add', paciente);
  }



}
