import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://192.168.1.234:5000/'
  on() {
    return this.http.get(this.baseUrl + 'lighton');
  }
  off() {
    return this.http.get(this.baseUrl + 'lightoff');
  }
  status() {
    return this.http.get(this.baseUrl + 'status');
  }
  weather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=cary&appid=62693fa26a3fa4a5f8301e39413f6e58')
  }
}
