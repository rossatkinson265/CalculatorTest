import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator-service.service';

describe('CalculatorServiceService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});