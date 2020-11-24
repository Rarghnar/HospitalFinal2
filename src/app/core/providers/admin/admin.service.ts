import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Observable } from 'rxjs';
import { Admin } from '../../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpService: HttpService) { }
  
  public getAdmin(): Observable<Admin[]> {
    return this.httpService.get<Admin[]>('/admin/all');
  }
  
  public addAdmin(admin: any): Observable<Admin> {
    return this.httpService.post<Admin>('/admin/add', admin);
  }
}
