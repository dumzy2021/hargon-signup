import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { MerchantSignupComponent } from './merchant-signup/merchant-signup.component';
import { SignupTypesComponent } from './signup-types/signup-types.component';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { NgxOtpInputModule } from 'ngx-otp-input';

@NgModule({
  declarations: [
    AppComponent,
    OtpVerificationComponent,
    MerchantSignupComponent,
    SignupTypesComponent,
    ChangeEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxOtpInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
