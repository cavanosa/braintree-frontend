import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  backendURL =  environment.backendUrl;

  constructor(private httpClient: HttpClient) { }

  public getToken(): Observable<any> {
    return this.httpClient.get<any>(this.backendURL + 'token');
  }


}
