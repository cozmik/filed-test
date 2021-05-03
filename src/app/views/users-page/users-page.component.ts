import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/states/app.state';
import {Observable} from 'rxjs';
import {UserModel} from '../../store/models/user.model';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users: Observable<UserModel[]>;
  back = faArrowLeft;

  constructor(private store: Store<AppState>) {
    this.users = store.select('users');
  }

  ngOnInit(): void {
  }

}
