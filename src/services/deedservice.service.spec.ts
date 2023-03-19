import { TestBed } from '@angular/core/testing';

import { DeedserviceService } from './deedservice.service';

describe('DeedserviceService', () => {
  let service: DeedserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeedserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
