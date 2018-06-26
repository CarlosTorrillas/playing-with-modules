import { Injectable } from '@angular/core';
import { PageOneService } from '../../../modules/page-one';
import { MessageProducer } from '../../../modules/message-producer';
import { PageTwoService } from '../../../modules/page-two';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService implements PageOneService , PageTwoService {

  // private messageSubject: Subject<{}> = new Subject<{}>();
  
  // sendMessage(value: any) {
  //    this.messageSubject.next(value);
  // }
  // listenMessage(): Observable<{}> {
  //   return this.messageSubject;
  // }

  model1: string = "";

  getPageTwoModel(): string {
    return this.model1+"p2"
  }

  setPageTwoModel(model: string) {
    throw new Error("Method not implemented.");
  }

  setPageOneModel(model: string) {
    this.model1 = model;
  }

  getPageOneModel(): string {
    return "particular PageOne Implementation";
  }
  
}
