import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { job } from '../models/job';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  allUses: user[] = []
  serverUrl : string = 'http://localhost:5209'

constructor(private http : HttpClient) {}

getUser( password: string,name: string): Observable<user> {
  let res = this.http.get(`${this.serverUrl}/userControler?password=${password}&name=${name}`);
  return res as Observable<user>;
}

pushCV(job: job, password: string, name : string) : Observable<user>{
  return this.http.put<user>(`${this.serverUrl}/userControler/pushCV?password=${password}&name=${name}`, job);
 }



}