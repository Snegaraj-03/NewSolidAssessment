import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterPackageDetailsComponent } from '../register-package-details/register-package-details.component';




@NgModule({
  declarations: [
   LoginComponent,
   RegistrationComponent,
   RegisterPackageDetailsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
