import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { PlayComponent } from './play/play.component';
import { RegisterPackageDetailsComponent } from './register-package-details/register-package-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Play',component:PlayComponent},
  //implements lazy loading
  {path:'account',loadChildren:()=> import('./account/account.module').then(module=> module.AccountModule)},
  {path:'not-found',component:NotFoundComponent},
  {path:'**',component:NotFoundComponent,pathMatch:'full'}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
