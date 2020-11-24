import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Observable } from 'rxjs';
import { Cama } from '../../models/cama.model';

@Injectable({
  providedIn: 'root'
})
export class CamaService {

  constructor(private httpService: HttpService) { }
  
  public getCama(): Observable<Cama[]> {
    return this.httpService.get<Cama[]>('/cama/all');
  }
  
  public addCama(cama: any): Observable<Cama> {
    return this.httpService.post<Cama>('/cama/add', cama);
  }
}
