import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Observable } from 'rxjs';
import { Medico } from '../../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private httpService: HttpService) { }
  
  public getMedico(): Observable<Medico[]> {
    return this.httpService.get<Medico[]>('/medico/all');
  }
  
  public addMedico(medico: Partial<Medico>) {
    return this.httpService.post<Medico>('/medico/add', medico);
  }
}
