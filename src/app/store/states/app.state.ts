import {UserModel} from '../models/user.model';
import {Testimonial} from '../models/testimonial.model';

export interface AppState {
  readonly users: UserModel[];
  readonly testimonials: Testimonial[];
}
