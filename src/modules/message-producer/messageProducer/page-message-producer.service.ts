import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class PageMessageProducerService {

  abstract sendMessage(value: any);
  abstract listenMessage(): Observable<{}>; 

}
