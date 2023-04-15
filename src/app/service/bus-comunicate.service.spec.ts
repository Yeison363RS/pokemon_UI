import { TestBed } from '@angular/core/testing';

import { BusComunicateService } from './bus-comunicate.service';

describe('BusComunicateService', () => {
  let service: BusComunicateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusComunicateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
