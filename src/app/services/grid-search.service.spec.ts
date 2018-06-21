import { TestBed, inject } from '@angular/core/testing';

import { GridSearchService } from './grid-search.service';

describe('GridSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridSearchService]
    });
  });

  it('should be created', inject([GridSearchService], (service: GridSearchService) => {
    expect(service).toBeTruthy();
  }));
});
