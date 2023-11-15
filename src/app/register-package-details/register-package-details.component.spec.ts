import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPackageDetailsComponent } from './register-package-details.component';

describe('RegisterPackageDetailsComponent', () => {
  let component: RegisterPackageDetailsComponent;
  let fixture: ComponentFixture<RegisterPackageDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPackageDetailsComponent]
    });
    fixture = TestBed.createComponent(RegisterPackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
