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
  
  public getHabitacionById(id: string): Observable<Habitacion | null>{
    let path: string = '/habitacion/';
    return this.httpService.get<Habitacion>(path + id);
  }
  
  public addHabitacion(habitacion: Partial<Habitacion>) {
    return this.httpService.post<Habitacion>('/habitacion/add', habitacion);
  }

  public deleteHabitacion(habitacion: any): Observable<Habitacion>{
    return this.httpService.post<Habitacion>('/habitacion/delete', habitacion);
  }

  public patchHabitacion(id: string, habitacion: any): Partial<Observable<Habitacion>>{
    let path: string = '/habitacion/';
    return this.httpService.patch<Habitacion>(path + id, habitacion);
  }
}
