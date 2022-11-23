import { PaymentService } from './../payment.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  amount: number;


  constructor(
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {
  }

  onPaymentStatus(event): void {

  }

  getClientToken(): Observable<any> {
    return this.paymentService.getToken().pipe(map(
      data => {
        return data.token;
      },
      err => {
        return Observable.throw(err)
      }
    ));
  }

  checkout(nonce: string, amount: number): void {
    console.log('Nonce: ' + nonce);
    console.log('Amount: ' + amount);
  }



}
