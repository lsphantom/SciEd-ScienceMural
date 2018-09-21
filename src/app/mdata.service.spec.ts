import { TestBed, inject } from '@angular/core/testing';

import { MdataService } from './mdata.service';

describe('MdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdataService]
    });
  });

  it('should be created', inject([MdataService], (service: MdataService) => {
    expect(service).toBeTruthy();
  }));
});
