import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account/account.service';
import { SharedService } from '../shared/shared.service';
import { take } from 'rxjs';
import { User } from '../model/AccountModel/login-response.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm:FormGroup = new FormGroup({});
submitted = false;
errorMessages:string[]=[];
returnUrl:string|null=null;

constructor(private formBuilder:FormBuilder,
  private router:Router,
  private accountService:AccountService,
 private activatedRoute:ActivatedRoute ){

    //after login it should not sow the login for a user who is already logged in
    this.accountService.user$.pipe(take(1)).subscribe({
      next:(user:User|null) => {
        if(user){
          this.router.navigateByUrl('/');
        }else{
          this.activatedRoute.queryParamMap.subscribe({
            next:(params:any)=>{
              if(params){
                this.returnUrl = params.get('returnUrl');
              }
            }
          })
        }
      }
    })

}

ngOnInit(): void {
this.initializeForm();
}

initializeForm(){
  this.loginForm = this.formBuilder.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  })
}

//login
login(){
  this.submitted=true;
  this.errorMessages=[];

  if (this.loginForm.valid) {
    this.accountService.login(this.loginForm.value)
    .subscribe({
      next: (response: any) => {
        if(this.returnUrl){
          this.router.navigateByUrl(this.returnUrl);
        }else{
          this.router.navigateByUrl('/');
        }
               
      },
      error: error => {
        console.log(error);
        if (error.error.errors) {
          this.errorMessages = error.error.errors;
        } else {
          this.errorMessages.push(error.error);
        }
      }
    })
  }
}
}
