import { TestBed } from '@angular/core/testing';

import { GrayharpElementsService } from './grayharp-elements.service';

describe('GrayharpElementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrayharpElementsService = TestBed.get(GrayharpElementsService);
    expect(service).toBeTruthy();
  });
});
