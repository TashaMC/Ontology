import { TestBed } from '@angular/core/testing';

import { CancerCodesService } from './cancer-codes.service';

describe('CancerCodesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CancerCodesService = TestBed.get(CancerCodesService);
    expect(service).toBeTruthy();
  });
});
