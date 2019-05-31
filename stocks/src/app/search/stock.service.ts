import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getStock(id: string): Observable<any> {
    return this.http.get('/api/v3/company/profile/aapl');
  }
}
