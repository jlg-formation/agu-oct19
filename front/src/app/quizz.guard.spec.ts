import { TestBed, async, inject } from '@angular/core/testing';

import { QuizzGuard } from './quizz.guard';

describe('QuizzGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizzGuard]
    });
  });

  it('should ...', inject([QuizzGuard], (guard: QuizzGuard) => {
    expect(guard).toBeTruthy();
  }));
});
