import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Prova1 } from './prova1';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Prova1Service {

  constructor(
    private http: HttpClient) { }

  getResponseFromServer(): Observable<Prova1> {
    return this.http.get<Prova1>('http://localhost:8080/component1s/10001');
  }
}
