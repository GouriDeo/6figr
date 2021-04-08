import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {record} from '../model/record'
import { Observable } from 'rxjs'

@Injectable ({
    providedIn: 'root'
})

export class HttpRequestServicet{
    constructor(private _http:HttpClient){}
    
   // track(user:any) : Observable<record[]>{
     //   return this._http.get<record[]>('http://localhost:5050/track/',user);
    //}
    tracko(user:any){
        return this._http.get('http://localhost:5050/track/',user)
    }

}