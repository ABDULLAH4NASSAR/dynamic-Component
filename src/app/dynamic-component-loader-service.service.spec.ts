import { TestBed } from '@angular/core/testing';

import { DynamicComponentLoaderServiceService } from './dynamic-component-loader-service.service';

describe('DynamicComponentLoaderServiceService', () => {
  let service: DynamicComponentLoaderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicComponentLoaderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
