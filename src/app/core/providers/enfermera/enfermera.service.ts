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

  public getEnfermeraById(id: string): Observable<Enfermera | null>{
    let path: string = '/enfermera/';
    return this.httpService.get<Enfermera>(path + id);
  }
  
  public addEnfermera(enfermera: Partial<Enfermera>) {
    return this.httpService.post<Enfermera>('/enfermera/add', enfermera);
  }

  public deleteEnfermera(enfermera: any): Observable<Enfermera>{
    return this.httpService.post<Enfermera>('/enfermera/delete', enfermera);
  }

  public patchEnfermera(enfermera: any): Partial<Observable<Enfermera>>{
    return this.httpService.patch<Enfermera>('/enfermera/patch', enfermera);
  }
}
