import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BusComunicateService } from '../service/bus-comunicate.service';
import { PokemonHeaderComponent } from './pokemon-header.component';
import {HttpClient} from '@angular/common/http'
import { PagePokemonComponent } from '../page-pokemon/page-pokemon.component';
import { ViewPokemonComponent } from '../view-pokemon/view-pokemon.component';

describe('PokemonHeaderComponent', () => {
  let component: PokemonHeaderComponent;
  let fixture: ComponentFixture<PokemonHeaderComponent>;
  let busComunicateService:BusComunicateService;
  
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ PokemonHeaderComponent,PagePokemonComponent,ViewPokemonComponent],
      imports: [ HttpClientTestingModule ],
      providers:[BusComunicateService,HttpClient]
    })
    .compileComponents();
    busComunicateService = TestBed.inject(BusComunicateService)  
   
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { 
    expect(component).toBeTruthy();
  });
});
