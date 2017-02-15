/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserWorkDataService } from './user-work-data.service';

describe('UserWorkDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserWorkDataService]
    });
  });

  it('should ...', inject([UserWorkDataService], (service: UserWorkDataService) => {
    expect(service).toBeTruthy();
  }));
});
