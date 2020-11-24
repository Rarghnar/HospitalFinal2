import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string;
  private httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:5000/api";

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': ''
      })
    }
   }

  public get<type>(path:string): Observable<type> {
    return this.httpClient.get(this.baseUrl + path, this.httpOptions)
      .pipe(map((data: any) => {
        return data.message as type;
      }));
  }

  public post<type>(path: string, body: any): Observable<type> {
    return this.httpClient.post(this.baseUrl + path, body, this.httpOptions)
      .pipe(map((data: any) => {
        return data.message as type;
      }));
  }
}
