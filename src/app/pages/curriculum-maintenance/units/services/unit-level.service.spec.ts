import { TestBed } from '@angular/core/testing';

import { UnitLevelService } from './unit-level.service';
import { HttpClientModule } from '@angular/common/http';

describe('UnitService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: UnitLevelService = TestBed.get(UnitLevelService);
    expect(service).toBeTruthy();
  });
});
