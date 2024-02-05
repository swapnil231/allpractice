import { TestBed } from '@angular/core/testing';

import { Int1Interceptor } from './int1.interceptor';

describe('Int1Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Int1Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Int1Interceptor = TestBed.inject(Int1Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
