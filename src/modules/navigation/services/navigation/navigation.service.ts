import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageOneService } from '../../../page-one';
import { PageTwoService } from '../../../page-two';
import { PageMessageProducerService } from '../../../message-producer/messageProducer/page-message-producer.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private nextPage: string;

  constructor(public router: Router,
     public pageOneService: PageOneService,
     public pageMessageProducer: PageMessageProducerService,
     public pageTwoService: PageTwoService) {
  }

  subscribeActionEvents() {
    this.pageMessageProducer.listenMessage().subscribe(value => {
      this.applyAction(value);
    });
  
  }

  applyAction(value) {
    console.log("lolwut",value)
    if (value === 'continue') {
      switch (this.nextPage) {
        case '/page-one':
          this.nextPage = '/page-two';
          break;
        case '/page-two':
          this.nextPage = '/page-one';
          break;
        default:
          this.nextPage = '/page-two';
      }
      this.router.navigate([this.nextPage]);
    } else {
      switch (this.nextPage) {
        case '/page-one':
          this.nextPage = '/page-two';
          break;
        case '/page-two':
          this.nextPage = '/page-one';
          break;
        default:
          this.nextPage = '/page-one';
      }
      this.router.navigate([this.nextPage]);
    }
  }
}
