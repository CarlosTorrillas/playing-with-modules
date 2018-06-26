import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class MessageProducer {

  abstract sendMessage(value);
  // console.log("how much")
  // this.messageSubject.next(value);
  abstract listenMessage(): Observable<{}> ;
  // {
  //   return this.messageSubject;
  // }

}
