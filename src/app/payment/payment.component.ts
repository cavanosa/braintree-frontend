import { PurchaseDto } from './../purchase-dto';
import { PaymentService } from './../payment.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  amount: number;


  constructor(
    private paymentService: PaymentService,
    private router: Router
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

  checkout(nonce: string, amount: number): Observable<any> {
    console.log('Nonce: ' + nonce);
    console.log('Amount: ' + amount);
    const dto = new PurchaseDto(nonce, amount);
    return this.paymentService.checkout(dto).pipe(map(
      data => {
        this.router.navigate(['/success']);
        return data;
      },
      err => {
        return Observable.throw(err);
      }
    ));
  }



}
