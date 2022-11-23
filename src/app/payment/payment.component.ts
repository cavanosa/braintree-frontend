import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  amount: number;

  backendTokenUrl = environment.backendTokenUrl;

  constructor() { }

  ngOnInit(): void {
  }

  onPaymentStatus(event): void {

  }



}
