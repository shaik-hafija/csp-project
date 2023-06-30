import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{
 
  Read,
  Flower
} from './flower';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlowerservicwService {
  

  constructor(private http: HttpClient) { }
  headers=new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer'+localStorage.getItem('token'),
  });
  private url = 'http://localhost:3000/';
  Getflower(p_type: String): Observable<Read> {
    return this.http.get<Read>(`${this.url}plants/Read${p_type}`);
  }

}