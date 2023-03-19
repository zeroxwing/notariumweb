import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Deed} from "../model/deed";

@Injectable({
  providedIn: 'root'
})
export class DeedserviceService {

  constructor(private http:HttpClient) { }
  backendip:String = '127.0.0.1'
  getAll():Observable<any>{
    return this.http.get<any>('http://'+this.backendip+':6969/deeds')
  }

  post(deed:Deed){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(deed)
    console.log(body)
    return this.http.post('http://'+this.backendip+':6969/deeds', body, {'headers':headers})
  }

  getOne(id:number){
    return this.http.get('http://'+this.backendip+':6969/deeds/'+id)
  }

  del(id:number){
    return this.http.delete('http://'+this.backendip+':6969/deeds/'+id)
  }

  put(deed:Deed){
    const headers = { 'content-type': 'application/json'}
    const body = JSON.stringify(deed)
    console.log(body)
    return this.http.put('http://'+this.backendip+':6969/deeds', body, {'headers':headers})
  }
}
