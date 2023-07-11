import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupTypesComponent } from './signup-types/signup-types.component';
import { MerchantSignupComponent } from './merchant-signup/merchant-signup.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { ChangeEmailComponent } from './change-email/change-email.component';

const routes: Routes = [
  {
    path:'',
    component:SignupTypesComponent
  },
  {
    path:'merchant-signup',
    component:MerchantSignupComponent
  },
  {
    path:'otp-verification',
    component:OtpVerificationComponent
  },
  {
    path:'change-email',
    component:ChangeEmailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
