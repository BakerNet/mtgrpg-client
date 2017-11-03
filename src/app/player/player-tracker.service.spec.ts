import { TestBed, inject } from '@angular/core/testing';

import { PlayerTrackerService } from './player-tracker.service';

describe('PlayerTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerTrackerService]
    });
  });

  it('should be created', inject([PlayerTrackerService], (service: PlayerTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
