import { Component } from '@angular/core';
import { NgxOtpInputConfig } from 'ngx-otp-input';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OtpVerificationComponent {
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
  }
}
