import { TestBed, inject } from '@angular/core/testing';

import { GamemasterControlService } from './gamemaster-control.service';

describe('GamemasterControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamemasterControlService]
    });
  });

  it('should be created', inject([GamemasterControlService], (service: GamemasterControlService) => {
    expect(service).toBeTruthy();
  }));
});
