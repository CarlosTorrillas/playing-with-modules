import { Component } from '@angular/core';
import { PageOneService } from '../../service/page-one.service';
import { PageMessageProducerService } from '../../../message-producer/messageProducer/page-message-producer.service';


@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent {

  public pageOneModel: string = "";

  constructor(public pageOneService: PageOneService, public messageProducerService: PageMessageProducerService) { 
    this.pageOneModel=this.pageOneService.getPageOneModel();
  }

  onContinue() {
    this.pageOneService.setPageOneModel(this.pageOneModel);
    this.messageProducerService.sendMessage('continue');
  }

  onBack() {
    this.messageProducerService.sendMessage('back');
  }
}
