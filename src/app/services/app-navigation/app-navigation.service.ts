import { Injectable } from '@angular/core';
import { EventsSubscriber, MessageProducer } from '../../../modules/message-producer';
import { PageOneService } from '../../../modules/page-one';
import { NavigationService } from '../../../modules/navigation';
import { PageTwoService } from '../../../modules/page-two';
import { DataManagerService } from '../dataManager/data-manager.service';
import { MessageProducerProjectService } from '../messageProducerProject/message-producer-project.service';

@Injectable({
  providedIn: 'root'
})
export class AppNavigationService implements EventsSubscriber {

  constructor(
    public navigationService: NavigationService,
    public pageMessageProducer: MessageProducerProjectService) { }

  private pageServices = [
    this.pageMessageProducer
  ];

  subscribeToEvents() {
    this.pageServices.forEach(
      service => service.listenMessage()
        .subscribe(action => this.navigationService.applyAction(action)));
  }

}
