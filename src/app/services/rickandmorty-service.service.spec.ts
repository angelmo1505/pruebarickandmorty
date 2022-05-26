import { TestBed } from '@angular/core/testing';

import { RickandmortyServiceService } from './rickandmorty-service.service';

describe('RickandmortyServiceService', () => {
  let service: RickandmortyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickandmortyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
