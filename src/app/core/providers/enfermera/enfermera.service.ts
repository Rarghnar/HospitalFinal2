import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Observable } from 'rxjs';
import { Enfermera } from '../../models/enfermera.model';

@Injectable({
  providedIn: 'root'
})
export class EnfermeraService {

  constructor(private httpService: HttpService) { }
  
  public getEnfermera(): Observable<Enfermera[]> {
    return this.httpService.get<Enfermera[]>('/enfermera/all');
  }
  
  public addMedico(enfermera: any): Observable<Enfermera> {
    return this.httpService.post<Enfermera>('/enfermera/add', enfermera);
  }
}
