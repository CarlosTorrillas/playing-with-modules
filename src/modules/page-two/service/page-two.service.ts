import { Injectable } from '@angular/core';
import { MessageProducer } from '../../message-producer/class/message-producer/message-producer';
import { Observable, Subject } from 'rxjs';

@Injectable()
export abstract class PageTwoService{

  abstract getPageTwoModel():string;
  abstract setPageTwoModel(model: string);
  
}
