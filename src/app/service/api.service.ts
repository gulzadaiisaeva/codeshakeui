import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getSynchronizationResults() : Observable<User[]>{

    return this.http.get <User[]>("http://localhost:8080/api/v1/codeshake/syncronization-results");

  }
}
