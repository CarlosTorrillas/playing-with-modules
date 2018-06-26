import { Injectable } from '@angular/core';
import { MessageProducer } from '../../message-producer/class/message-producer/message-producer';
import { Observable } from 'rxjs';
@Injectable()
export abstract class PageOneService{

  abstract getPageOneModel(): string;
  abstract setPageOneModel(model: string);

}
