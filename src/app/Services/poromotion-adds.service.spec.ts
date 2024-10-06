import { TestBed } from '@angular/core/testing';

import { PoromotionAddsService } from './poromotion-adds.service';

describe('PoromotionAddsService', () => {
  let service: PoromotionAddsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoromotionAddsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
