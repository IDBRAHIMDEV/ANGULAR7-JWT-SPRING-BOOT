import { Address } from './../models/address';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.baseUrl}/addresses`);
  }

  Save(data: Address) {
    return this.http.post(`${environment.baseUrl}/addresses`, data);
  }
}
