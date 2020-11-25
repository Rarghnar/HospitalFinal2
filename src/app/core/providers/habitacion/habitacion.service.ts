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
  
  /*public async addHabitacion(habitacion: Partial<Habitacion>){
    const habitacion$ = await this.httpService.post<Habitacion>('/habitacion/add', habitacion)
      await habitacion$.toPromise();
      return habitacion$
    console.log(habitacion$);
  }*/

  public addHabitacion(habitacion: Partial<Habitacion>) {
    return this.httpService.post<Habitacion>('/habitacion/add', habitacion)
  }
}
