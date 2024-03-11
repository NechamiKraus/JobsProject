import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { job } from '../models/job';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JoServiceService {
  jobs: job[] = []
  serverUrl: string = 'http://localhost:5209'
  constructor(private http : HttpClient) { }

  getListJob(): Observable<job[]>{
    let res = this.http.get(`${this.serverUrl}/jobControler`)
    return res as Observable<job[]>
  }
  

}

