import { TestBed } from '@angular/core/testing';

import { CrossValidatorsPasswordService } from './cross-validators-password.service';

describe('CrossValidatorsPasswordService', () => {
  let service: CrossValidatorsPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrossValidatorsPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
