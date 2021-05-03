import {Action} from '@ngrx/store';
import {UserModel} from '../models/user.model';


export  const ADD_USER = '[USER] Add';
export const REMOVE_USER = '[USER] Remove';
export const USER_ADD = '[USER] Added';

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: UserModel) {}
}

export class RemoveUser implements Action {
  readonly type = REMOVE_USER;
  constructor(public name: string) {}
}

export class UserAdded implements Action {
  readonly type = USER_ADD;
  constructor(public user: UserModel) {}
}

export type UserActions = AddUser | RemoveUser | UserAdded;
