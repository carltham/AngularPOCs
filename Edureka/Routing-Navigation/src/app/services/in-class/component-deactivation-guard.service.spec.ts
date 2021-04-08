import { TestBed } from '@angular/core/testing';

import { ComponentDeactivationGuardService } from './component-deactivation-guard.service';

describe('ComponentDeactivationGuardService', () => {
  let service: ComponentDeactivationGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentDeactivationGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
