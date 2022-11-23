import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// external
import { NgxBraintreeModule } from 'ngx-braintree';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxBraintreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
