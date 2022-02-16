import { Injectable } from '@angular/core';
import { interval, Subject } from 'rxjs';

@Injectable()
export class RandomService {
  public dataSubject = new Subject<number>();
  public dataState = this.dataSubject.asObservable();

  public subjectdata(from: number, to:number): number {
    return Math.abs(Math.floor(Math.random() * (to - from) + from));
  }
}