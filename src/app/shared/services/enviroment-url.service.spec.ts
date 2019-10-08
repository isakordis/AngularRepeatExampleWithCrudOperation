import { TestBed } from '@angular/core/testing';

import { EnviromentURLService } from './enviroment-url.service';

describe('EnviromentURLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnviromentURLService = TestBed.get(EnviromentURLService);
    expect(service).toBeTruthy();
  });
});
