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

@NgModule({
  declarations: [
    AppComponent,
    PagePokemonComponent,
    ViewPokemonComponent,
    PokemonHeaderComponent
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
