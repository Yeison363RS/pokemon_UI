import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusComunicateService {

  private eventBus = new Subject<any>();

  publish(event: any) {
    this.eventBus.next(event);
  }

  subscribe(eventName: any, callback: any) {
    return this.eventBus.asObservable().subscribe((event) => {
      if (event.name === eventName) {
        callback(event);
      }
    });
  }
}
