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
  
  public addPaciente(paciente: any): Observable<Paciente> {
    return this.httpService.post<Paciente>('/paciente/add', paciente);
  }
}
