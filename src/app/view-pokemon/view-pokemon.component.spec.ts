import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPokemonComponent } from './view-pokemon.component';
import { TypesPokemonPipe } from '../pipes/types-pokemon.pipe';
import { HttpClient } from '@angular/common/http';
import { PokemonServiceService } from '../service/pokemon-service.service';
import { HttpClientTestingModule, HttpTestingController  } from '@angular/common/http/testing';
import { BusComunicateService } from '../service/bus-comunicate.service';

describe('ViewPokemonComponent', () => {
  let component: ViewPokemonComponent;
  let fixture: ComponentFixture<ViewPokemonComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPokemonComponent, TypesPokemonPipe],
      imports:[HttpClientTestingModule],
      providers:[PokemonServiceService,BusComunicateService,
        HttpClient]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPokemonComponent);
    component = fixture.componentInstance
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
