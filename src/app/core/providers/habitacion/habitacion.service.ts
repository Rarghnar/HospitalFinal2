import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Observable } from 'rxjs';
import { Habitacion } from '../../models/habitacion.model';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  constructor(private httpService: HttpService) { }
  
  public getHabitacion(): Observable<Habitacion[]> {
    return this.httpService.get<Habitacion[]>('/habitacion/all');
  }
  
  public addHabitacion(habitacion: Partial<Habitacion>) {
    return this.httpService.post<Habitacion>('/habitacion/add', habitacion)
  }
}
