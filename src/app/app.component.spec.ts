import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PokemonHeaderComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => { 
    const fixture = TestBed.createComponent(AppComponent);
    TestBed.inject(PokemonHeaderComponent)
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
