import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  backendip:String = '127.0.0.1'
  getAll():Observable<any>{
    return this.http.get<any>('http://'+this.backendip+':6969/users')
  }

  post(user:User){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(user)
    console.log(body)
    return this.http.post('http://'+this.backendip+':6969/users', body, {'headers':headers})
  }

  getOne(id:number){
    return this.http.get('http://'+this.backendip+':6969/users/'+id)
  }

  del(id:number){
    return this.http.delete('http://'+this.backendip+':6969/users/'+id)
  }

  put(user:User){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(user)
    console.log(body)
    return this.http.put('http://'+this.backendip+':6969/users', body, {'headers':headers})
  }

  login(username: String, passwd: String){
    return this.http.get<User>('http://'+this.backendip+':6969/users/login?username='+username+'&passwd='+passwd)
  }
}
