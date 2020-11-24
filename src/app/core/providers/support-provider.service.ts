import { Injectable } from '@angular/core';
import { HttpService } from '../services/http/http.service';
import { Cama } from '../models/cama.model';
import { Enfermera } from '../models/enfermera.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportProviderService {

  constructor(private httpService: HttpService) { }
  
  public getEnfermera(): Observable<Enfermera[]> {
    return this.httpService.get<Enfermera[]>('/enfermera/all');
  }
  
  public addEnfermera(enfermera: any): Observable<Enfermera> {
    return this.httpService.post<Enfermera>('/enfermera/add', enfermera);
  }
}
