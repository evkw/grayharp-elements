import { TestBed } from '@angular/core/testing';

import { TritonLibService } from './triton-lib.service';

describe('TritonLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TritonLibService = TestBed.get(TritonLibService);
    expect(service).toBeTruthy();
  });
});
