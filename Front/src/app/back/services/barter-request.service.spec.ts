import { TestBed } from '@angular/core/testing';

import { BarterRequestService } from './barter-request.service';

describe('BarterRequestService', () => {
  let service: BarterRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarterRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
