import { TestBed, inject } from '@angular/core/testing';

import { HomeRedirectService } from './home-redirect.service';

describe('HomeRedirectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeRedirectService]
    });
  });

  it('should be created', inject([HomeRedirectService], (service: HomeRedirectService) => {
    expect(service).toBeTruthy();
  }));
});
