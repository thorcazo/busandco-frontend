import { TestBed } from '@angular/core/testing';

import { LineaDetalleService } from './linea-detalle.service';

describe('LineaDetalleService', () => {
  let service: LineaDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineaDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
