import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserModel} from '../store/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  pay(data: any): Observable<any>{
    return this.http.post('https://api.mockaroo.com/api/1a047fd0?key=ada85cf0', data).pipe(
      map((res: any) => {
        return res.map( user => user as UserModel);
      })
    );
  }
}
