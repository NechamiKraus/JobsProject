import { TestBed } from '@angular/core/testing';

import { JoServiceService } from './jo-service.service';

describe('JoServiceService', () => {
  let service: JoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
