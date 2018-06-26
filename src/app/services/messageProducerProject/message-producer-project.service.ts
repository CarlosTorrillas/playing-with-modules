import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PageMessageProducerService } from '../../../modules/message-producer/messageProducer/page-message-producer.service';

@Injectable({
  providedIn: 'root'
})
export class MessageProducerProjectService implements PageMessageProducerService{

  private messageSubject: Subject<{}> = new Subject<{}>();
  
  sendMessage(value: any) {
     this.messageSubject.next(value);
  }
  listenMessage(): Observable<{}> {
    return this.messageSubject;
  }

  constructor() { }
}
