import { TestBed } from '@angular/core/testing';

import { ObjectSelectionService } from './object-selection.service';

describe('ObjectSelectionService', () => {
  let service: ObjectSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
