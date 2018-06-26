import { Component, OnInit } from '@angular/core';
import { PageTwoService } from '../../service/page-two.service';
import { PageMessageProducerService } from '../../../message-producer/messageProducer/page-message-producer.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent {

  public pageTwoModel: string = "";

  constructor(public pageTwoService: PageTwoService, public pageMessageProducer: PageMessageProducerService) { 
    this.pageTwoModel = this.pageTwoService.getPageTwoModel();
  }

  onContinue() {
    this.pageMessageProducer.sendMessage('continue');
  }

  onBack() {
    this.pageMessageProducer.sendMessage('back');
  }

}
