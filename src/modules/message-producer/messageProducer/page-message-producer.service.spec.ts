import { TestBed, inject } from '@angular/core/testing';

import { PageMessageProducerService } from './page-message-producer.service';

describe('PageMessageProducerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageMessageProducerService]
    });
  });

  it('should be created', inject([PageMessageProducerService], (service: PageMessageProducerService) => {
    expect(service).toBeTruthy();
  }));
});
