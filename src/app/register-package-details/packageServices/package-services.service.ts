import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PackageDetails } from 'src/app/model/PackageModel/package.model';
import { environment } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class PackageServicesService {

  constructor(private http:HttpClient) { }
  
  

//  //Dues
//   getDue(page: number, pageSize: number): Observable<any> {
//     const params = new HttpParams()
//       .set('page', page.toString())
//       .set('pageSize', pageSize.toString());

//     return this.http.get<any>('https://localhost:7036/api/DueSetting', { params });
//   }

//   addDue(data:AddDue):Observable<AddDue>{
//     return this.http.post<AddDue>(`${environments.addDueUrl}`,data);
//   }
//   getDueById(id:number):Observable<Due>{
//     return this.http.get<Due>(`${environments.addDueUrl}/${id}`)
//   }
//   updateDueByID(id:number,updateDue:Due):Observable<Due>{
//     return this.http.put<Due>(`${environments.addDueUrl}`+"/update/"+`${id}`,updateDue);
//   }
//   deleteDueById(id:number):Observable<Due>{
//     return this.http.delete<Due>(`${environments.addDueUrl}/${id}?addAuth=true`);
//   }
  //Packages
  getPackages():Observable<PackageDetails[]>{
    return this.http.get<PackageDetails[]>(`${environment.apiUrl}RegistrationPackage`);
  }
  
  
  // addPackage(data:PackageDetails):Observable<PackageDetails>{
  //   return this.http.post<PackageDetails>(`${environments.postPackageUrl}?addAuth=true`,data);
  // }
  // getPackageById(id:number):Observable<PackageDetails>{
  //   return this.http.get<PackageDetails>(`${environments.baseApiUrl}?id=${id}`)
  // }
  // updatePackage(id:number,reorganize:PackageDetails):Observable<PackageDetails>{
  //   return this.http.put<PackageDetails>(`${environments.updatePackageUrl}/${id}`,reorganize,
  //   {
  //     headers:{
  //       'Authorization': this.cookieService.get('Authorization')
  //     }
  //   });

   
  // }
  // deletePackage(id:number):Observable<PackageDetails>{
  //   return this.http.delete<PackageDetails>(`${environments.deletePackageUrl}?id=${id}?addAuth=true`);
  // }
}
