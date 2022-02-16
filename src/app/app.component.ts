import { Component, OnInit, OnDestroy } from '@angular/core';
import { RandomService } from './services/random.service';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
 

  subscription: Subscription;

  randomNumber: number;

  checkoutForm = this.formBuilder.group({
    from: '',
    to: ''
  });



  constructor(
    private randomService: RandomService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void {
    let from: number = this.checkoutForm.value.from;
    let to: number = this.checkoutForm.value.to;
    // Process checkout data here
    this.randomNumber = this.randomService.subjectdata(from, to);
    this.checkoutForm.reset();
  }

}
