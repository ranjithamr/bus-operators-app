import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusOperatorsService {

  constructor(private http: HttpClient) { }

  fetchBusServices() {
    return this.http.get('../../assets/data/bus-services.example.json');
  }
}
