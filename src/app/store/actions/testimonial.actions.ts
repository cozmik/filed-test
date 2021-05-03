import {Action} from '@ngrx/store';
import {Testimonial} from '../models/testimonial.model';

export  const ADD_TESTIMONIAL = '[TESTIMONIAL] Add';

export class AddTestimonial implements Action {
  readonly type = ADD_TESTIMONIAL;
  constructor(public payload: Testimonial) {}
}

export type TestimonialActions = AddTestimonial;
