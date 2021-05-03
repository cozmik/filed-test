import {Testimonial} from '../models/testimonial.model';
import {TestimonialActions} from '../actions/testimonial.actions';

const initialState: Testimonial[] = [
  {
    title: 'It surpassed our expectations',
    firstName: 'Tania',
    lastName: 'Y.',
    comment: 'Filed has completely surpassed our expectations. I will refer everyone I know. Filed is worth much more than I paid.',
    company: 'Hello',
    position: 'Flexi Content',
    profile: '../../../assets/images/lady1.jpg',
  },
  {
    title: 'The essential marketing tool',
    firstName: 'Jack',
    lastName: 'Francis',
    comment: 'Filed is the most valuable business resource we have EVER purchased. I was amazed at the quality of filed. We were treated like royalty.',
    company: 'Accidents Direct',
    position: 'Manager',
    profile: '../../../assets/images/portrait3.jpg',
  },

  {
    title: 'Your company is truly upstanding',
    firstName: 'Dawna',
    lastName: 'N.',
    comment: 'The service was excellent. After using filed my business skyrocketed! It really saves me time and effort.',
    company: 'Museum of Typography',
    position: 'Editor',
    profile: '../../../assets/images/portriat2.jpg',
  }
];

export function testimonialReducer(state: Testimonial[] = initialState, action: TestimonialActions): Testimonial[]{
  switch (action.type) {
    case '[TESTIMONIAL] Add':
      return [...state, action.payload];
    default:
      return state;
  }
}
