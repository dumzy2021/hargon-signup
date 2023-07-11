import { Component } from '@angular/core';

@Component({
  selector: 'app-merchant-signup',
  templateUrl: './merchant-signup.component.html',
  styleUrls: ['./merchant-signup.component.scss']
})
export class MerchantSignupComponent {
industries:any[]=[
  'Agriculture',
  'Oil and Gas',
  'Manufacturing'
]
isShowPassword:boolean= false

onPaswordChange(){
this.isShowPassword= !this.isShowPassword
}
}
