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

  public deletePaciente(id: string): Observable<Paciente>{
    let path: string = '/paciente/';
    return this.httpService.delete<Paciente>(path+id);
  }

  public modPaciente(id: string, paciente: Partial<Paciente>): Partial<Observable<Paciente>>{
    let path: string = '/paciente/';
    console.log(path+id);
    return this.httpService.patch<Paciente>(path+id, paciente);
  }





}
