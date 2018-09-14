import { TestBed } from '@angular/core/testing';

import { FetchBusesService } from './fetch-buses.service';

describe('FetchBusesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchBusesService = TestBed.get(FetchBusesService);
    expect(service).toBeTruthy();
  });
});
