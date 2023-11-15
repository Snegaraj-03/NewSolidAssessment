import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { RegisterPackageDetailsComponent } from '../register-package-details/register-package-details.component';
import { AuthorizationGuard } from '../shared/guards/auth.guard';


const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'',
  runGuardsAndResolvers:'always',
  canActivate:[AuthorizationGuard],
  children:[
    {path:'package-details',component:RegisterPackageDetailsComponent}
  ]
  },
  

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AccountRoutingModule { }
