import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestService {
  constructor(private httpClient: HttpClient) { }
  baseUrl = 'http://18.222.230.128:8080';
  get_products() {
    return this.httpClient.get(this.baseUrl + '/products');
  }
}
