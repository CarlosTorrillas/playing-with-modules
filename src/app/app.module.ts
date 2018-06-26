import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppNavigationService } from './services/app-navigation/app-navigation.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PageOneService, PageOneModule  } from '../modules/page-one/';
import { PageTwoService, PageTwoModule  } from '../modules/page-two/';
import { DataManagerService } from './services/dataManager/data-manager.service';
import { MessageProducerProjectService } from './services/messageProducerProject/message-producer-project.service';
import { PageMessageProducerService } from '../modules/message-producer/messageProducer/page-message-producer.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PageOneModule,
    PageTwoModule
  ],
  providers: [
    {provide: PageMessageProducerService, useClass: MessageProducerProjectService},
    AppNavigationService,
    {provide: PageOneService, useClass: DataManagerService},
    {provide: PageTwoService, useExisting: PageOneService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
