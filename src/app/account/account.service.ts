import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRequest } from '../model/AccountModel/user-request.model';

import { environment } from 'src/environments/environment.development';
import { Login } from '../model/AccountModel/login.model';
import { User } from '../model/AccountModel/login-response.model';
import { ReplaySubject, map, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private userSource = new ReplaySubject<User|null>(1);
  user$ = this.userSource.asObservable();

  constructor(private http:HttpClient,
              private router:Router) { }

              
    refreshUser(jwt:string|null){
      if(jwt === null){
        this.userSource.next(null);
        return of(undefined);
      }
      let headers = new HttpHeaders();
      headers = headers.set('Authorization','Bearer '+jwt);
      return this.http.get<User>(`${environment.apiUrl}Account/refresh-user-token`,{headers})
      .pipe(
        map((user:User)=>{
          if(user){
            this.setUser(user);
          }
        })
      )
   }

 login(data:Login){
  return this.http.post<User>(`${environment.apiUrl}Account/login`,data).
  pipe(
    map((user:User)=>{
      if(user){
        this.setUser(user)
       
      }
      
    })
  );
 }
 logout(){
  localStorage.removeItem(environment.userKey);
  this.userSource.next(null);
  this.router.navigateByUrl('/');
 }
  getJWT(){
    const key = localStorage.getItem(environment.userKey);
    if(key){
      const user:User = JSON.parse(key);
      return user.jwtToken; 
    }else{
      return null;
    }
  }
  private setUser(user:User){
    localStorage.setItem(environment.userKey,JSON.stringify(user));
    this.userSource.next(user);

    this.user$.subscribe({
      next:response=>console.log(response)
    })
  }
  register(data:UserRequest){
    return this.http.post(`${environment.apiUrl}Account`,data);
  }
}
