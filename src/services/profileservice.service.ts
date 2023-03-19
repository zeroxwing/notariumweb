import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Profile} from "../model/profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private http:HttpClient) { }
  backendip:String = '127.0.0.1'
  getAll():Observable<any>{
    return this.http.get<any>('http://'+this.backendip+':6969/profiles')
  }

  post(profile:Profile){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(profile)
    console.log(body)
    return this.http.post('http://'+this.backendip+':6969/profiles', body, {'headers':headers})
  }

  getOne(id:number){
    return this.http.get('http://'+this.backendip+':6969/profiles/'+id)
  }

  del(id:number){
    return this.http.delete('http://'+this.backendip+':6969/profiles/'+id)
  }

  put(profile:Profile){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(profile)
    console.log(body)
    return this.http.put('http://'+this.backendip+':6969/profiles', body, {'headers':headers})
  }
}
