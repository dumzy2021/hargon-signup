import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTypesComponent } from './signup-types.component';

describe('SignupTypesComponent', () => {
  let component: SignupTypesComponent;
  let fixture: ComponentFixture<SignupTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupTypesComponent]
    });
    fixture = TestBed.createComponent(SignupTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
