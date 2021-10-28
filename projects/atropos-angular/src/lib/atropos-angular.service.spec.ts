import { TestBed } from '@angular/core/testing';

import { AtroposAngularService } from './atropos-angular.service';

describe('AtroposAngularService', () => {
  let service: AtroposAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtroposAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
