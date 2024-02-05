import { TestBed } from '@angular/core/testing';

import { BehavioursubjectService } from './behavioursubject.service';

describe('BehavioursubjectService', () => {
  let service: BehavioursubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehavioursubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
