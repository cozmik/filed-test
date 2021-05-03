import {UserModel} from '../models/user.model';
import {UserActions} from '../actions/user.actions';

const initialState: UserModel[] = [
  {
    firstName: 'James',
    lastName: 'Rice',
    email: 'j-rice@domain.com',
    budget: 400,
    phoneNumber: 89039039
  }
];

export function userReducer(state: UserModel[] = initialState, action: UserActions): UserModel[]{
  switch (action.type){
    case '[USER] Add':
      return [...state, action.payload];
    default:
      return state;
  }
}
