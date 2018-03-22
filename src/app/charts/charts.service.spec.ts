import { TestBed, inject } from '@angular/core/testing';

import { chartsService } from './charts.service';

describe('chartsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [chartsService]
    });
  });

  it('should be created', inject([chartsService], (service: chartsService) => {
    expect(service).toBeTruthy();
  }));
});
