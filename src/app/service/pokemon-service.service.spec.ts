import { TestBed } from '@angular/core/testing';
import {HttpClient} from '@angular/common/http'
import { PokemonServiceService } from './pokemon-service.service';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';

describe('PokemonServiceService', () => {
  let service: PokemonServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[PokemonServiceService, HttpClient]
      });
    service = TestBed.inject(PokemonServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(() => {
    httpMock.verify();
  });
});
