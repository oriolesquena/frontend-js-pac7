import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { articleNewDeactivateGuardsGuard } from './article-new-deactivate-guards.guard';

describe('articleNewDeactivateGuardsGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => articleNewDeactivateGuardsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
