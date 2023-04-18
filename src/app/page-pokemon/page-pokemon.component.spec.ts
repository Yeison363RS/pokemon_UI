import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PagePokemonComponent } from './page-pokemon.component';
import { FormsModule } from '@angular/forms';
import {HttpClient} from '@angular/common/http'

describe('PagePokemoComponent', () => {
  let component: PagePokemonComponent;
  let fixture: ComponentFixture<PagePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,FormsModule],
      declarations: [ PagePokemonComponent ],
      providers:[HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
