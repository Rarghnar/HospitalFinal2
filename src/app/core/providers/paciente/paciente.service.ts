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
    let path: string = '/paciente/';
    return this.httpService.get<Paciente>(path+id);
  }


  public addPaciente(paciente: Partial<Paciente>) {
    return this.httpService.post<Paciente>('/paciente/add', paciente);
  }

  public deletePaciente(paciente: any): Observable<Paciente>{
    return this.httpService.post<Paciente>('/paciente/delete', paciente);
  }

  public modPaciente(paciente: any): Partial<Observable<Paciente>>{
    return this.httpService.patch<Paciente>('/paciente/patch', paciente);
  }



}
