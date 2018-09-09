import { TestBed } from '@angular/core/testing';

import { Prova1Service } from './prova1.service';

describe('Prova1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Prova1Service = TestBed.get(Prova1Service);
    expect(service).toBeTruthy();
  });
});
