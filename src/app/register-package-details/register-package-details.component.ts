import { Component, OnInit } from '@angular/core';
import { PackageServicesService } from './packageServices/package-services.service';
import { Observable } from 'rxjs';
import { PackageDetails } from '../model/PackageModel/package.model';

@Component({
  selector: 'app-register-package-details',
  templateUrl: './register-package-details.component.html',
  styleUrls: ['./register-package-details.component.css']
})
export class RegisterPackageDetailsComponent implements OnInit{
package$?:Observable<PackageDetails[]>;
  constructor(private packageService:PackageServicesService){

  }
  ngOnInit(): void {
   this.package$ =this.packageService.getPackages();
   console.log(this.package$)
  }
}
