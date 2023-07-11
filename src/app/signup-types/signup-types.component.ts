import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-types',
  templateUrl: './signup-types.component.html',
  styleUrls: ['./signup-types.component.scss']
})
export class SignupTypesComponent {
types:any[]=[
  {
   type:'Merchant' ,
   icon:'assets/signup/merchant-icon.svg',
   isAvailable:true,
   route:'/merchant-signup'
  },
  {
   type:'Company' ,
   icon:'assets/signup/company-icon.svg',
   isAvailable:true,
   route:'/merchant-signup'
  },
  {
   type:'Agents' ,
   icon:'assets/signup/agent-icon.svg',
   isAvailable:true,
   route:'/merchant-signup'
  },
  {
   type:'Partnership' ,
   icon:'assets/signup/partnership-icon.svg',
   isAvailable:false,
   route:'/merchant-signup'
  },
]
}
