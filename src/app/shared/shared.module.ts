import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';


import { NotFoundComponent } from './components/not-found/not-found.component';
import { ValidationMessagesComponent } from './components/validation-messages/validation-messages.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './modals/notification/notification.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    ValidationMessagesComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports:[
    RouterModule,
    ReactiveFormsModule,
    ValidationMessagesComponent
  ]
})
export class SharedModule { }
