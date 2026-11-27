import { TestBed } from '@angular/core/testing';
import { Sitios } from './sitios';

describe('Sitios', () => {
  let service: Sitios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sitios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
