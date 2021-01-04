import { TestBed, inject } from '@angular/core/testing';

import { AuthresolverService } from './authresolver.service';

describe('AuthresolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthresolverService]
    });
  });

  it('should be created', inject([AuthresolverService], (service: AuthresolverService) => {
    expect(service).toBeTruthy();
  }));
});
