import { TestBed } from '@angular/core/testing';

import { Int2Interceptor } from './int2.interceptor';

describe('Int2Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Int2Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Int2Interceptor = TestBed.inject(Int2Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
