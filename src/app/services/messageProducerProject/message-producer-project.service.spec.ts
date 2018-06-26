import { TestBed, inject } from '@angular/core/testing';

import { MessageProducerProjectService } from './message-producer-project.service';

describe('MessageProducerProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageProducerProjectService]
    });
  });

  it('should be created', inject([MessageProducerProjectService], (service: MessageProducerProjectService) => {
    expect(service).toBeTruthy();
  }));
});
