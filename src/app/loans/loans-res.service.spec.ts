import { TestBed } from '@angular/core/testing';

import { LoansResService } from './loans-res.service';

describe('LoansResService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoansResService = TestBed.get(LoansResService);
    expect(service).toBeTruthy();
  });
});
