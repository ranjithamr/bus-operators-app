import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BusOperatorsService } from './bus-operators.service';

describe('BusOperatorsService', () => {
  let service: BusOperatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ BusOperatorsService ]
    });
    service = TestBed.inject(BusOperatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
