import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantSignupComponent } from './merchant-signup.component';

describe('MerchantSignupComponent', () => {
  let component: MerchantSignupComponent;
  let fixture: ComponentFixture<MerchantSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MerchantSignupComponent]
    });
    fixture = TestBed.createComponent(MerchantSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
