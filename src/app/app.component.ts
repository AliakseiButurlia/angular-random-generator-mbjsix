import { Component, OnInit, OnDestroy } from '@angular/core';
import { RandomService } from './services/random.service';
import { Subscription } from 'rxjs';
import moment from 'moment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular';
  time = new Date();
  momenttime: string;
  timer: NodeJS.Timer;
  momenttimer: NodeJS.Timer;

  subscription: Subscription;

  randomNumber: number;



  constructor(
    private randomService: RandomService,
  ) { }

  ngOnInit() {
    this.timer = setInterval(() => this.time = new Date(), 1000);
    this.momenttimer = setInterval(() => this.momenttime = moment().format('MM/DD HH:mm:ss'), 1000);

    this.randomService.subjectdata();
    this.subscription = this.randomService.dataState.subscribe(
      (value: number) => {
        this.randomNumber = value;
      }
    )
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    clearInterval(this.momenttimer);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
