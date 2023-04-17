import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { PagePokemonComponent } from './page-pokemon/page-pokemon.component';
import { ViewPokemonComponent } from './view-pokemon/view-pokemon.component';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { FormsModule } from '@angular/forms';
import { PokemonServiceService } from './service/pokemon-service.service';
import { BusComunicateService } from './service/bus-comunicate.service';
import { TypesPokemonPipe } from './pipes/types-pokemon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PagePokemonComponent,
    ViewPokemonComponent,
    PokemonHeaderComponent,
    TypesPokemonPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PokemonServiceService,BusComunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
