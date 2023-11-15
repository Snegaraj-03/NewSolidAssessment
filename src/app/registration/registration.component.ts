import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PackageDetails } from '../model/PackageModel/package.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  registerForm:FormGroup = new FormGroup({});
  submitted=false;
  errorMessages:string[]=[];
  package: PackageDetails[] = [];
  
  constructor(private accountService:AccountService,private formBuilder:FormBuilder,private http:HttpClient,
    private router:Router,private sharedService:SharedService){

     
  }
  ngOnInit(): void {
    this.http.get<PackageDetails[]>(`${environment.apiUrl}RegistrationPackage`).subscribe((data) => {
      this.package = data;
      console.log(this.package);
    });
    
    this.initializeForm();

   
  }

  
  
  register() {
    this.submitted = true;
    this.errorMessages = [];

    if (this.registerForm.valid) {
      this.accountService.register(this.registerForm.value)
      .subscribe({
        next: (response: any) => {
          console.log(response);
         this.sharedService.showNotification(true, response.value.title, response.value.message);
          this.router.navigateByUrl('/account/login');
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

  initializeForm(){
    this.registerForm = this.formBuilder.group({
      fullName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
      email:['',[Validators.required,Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(100)]],
      registrationDate:[''],
      expirationDate:[''],
      registrationPackageId:['',[Validators.required]],
      
      
  
    })
  }
  

}


