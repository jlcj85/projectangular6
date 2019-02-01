import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../models/user';

const INIT_DATA = [];
const URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private DataStore = new BehaviorSubject(INIT_DATA);
  data$: Observable<any> = this.DataStore.asObservable();

  constructor(private httpClient: Http) {

  }

  loadUsers() {
    this.httpClient.get(`${URL}/users`)
      .pipe(
      map(res => res.json())
      ).subscribe((data: any) => {
        this.DataStore.next(data);
      })

  }
}
