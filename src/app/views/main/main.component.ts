import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppState} from '../../store/states/app.state';
import {Store} from '@ngrx/store';
import * as UserActions from '../../store/actions/user.actions';
import {Observable} from 'rxjs';
import {Testimonial} from '../../store/models/testimonial.model';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';
import {Router} from '@angular/router';
import {PaymentService} from '../../services/payment.service';
import {AlertService} from '@full-fledged/alerts';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  next: boolean;
  testimonials: Observable<Testimonial[]>;
  spinner = faSpinner;

  firstForm: FormGroup;
  secondForm: FormGroup;
  submitting: boolean;
  code: string;

  constructor(private fb: FormBuilder,  private alertService: AlertService, private paymentService: PaymentService, private store: Store<AppState>, private router: Router) {
    this.next = false;
    this.submitting = false;
    this.testimonials = this.store.select('testimonials');
  }

  ngOnInit(): void {

    this.firstForm = this.fb.group({
      convertedAds: ['yes', Validators.required],
      budget: ['200', Validators.required],
    });

    this.secondForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      budget: ['200', Validators.required],
      phone: ['', Validators.required],
    });
  }

  getField(name): AbstractControl {
    return this.secondForm.get(name);
  }

  submitUser(): void {
    this.submitting = true;
    setTimeout(() => {
      this.store.dispatch(new UserActions.AddUser({...this.secondForm.value,
        phoneNumber: this.code + this.secondForm.get('phone').value}));
      this.submitting = false;
      this.router.navigate(['users']);
    }, 2000);
  }

  pay(data: any): void {
    this.paymentService.pay(data).subscribe(res => {
      console.log(res);
      // Show notice
      this.alertService.success('Payment successfully made');
    }, error => {
      // show error
      this.alertService.danger('An error occurred');
    });
  }
}
