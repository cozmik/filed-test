import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from './store/models/user.model';
import {Store} from '@ngrx/store';
import {AppState} from './store/states/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filed-test';
  users: Observable<UserModel[]>;

  constructor(private store: Store<AppState>) {
    this.users = this.store.select('users');
  }
}
