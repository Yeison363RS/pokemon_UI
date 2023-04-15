import { Component } from '@angular/core';
import { PokemonServiceService } from '../service/pokemon-service.service';
import { Pokemon } from '../service/pokemon-interface';
import { Observable } from 'rxjs';
import { BusComunicateService } from '../service/bus-comunicate.service';

@Component({
  selector: 'app-page-pokemon',
  templateUrl: './page-pokemon.component.html',
  styleUrls: ['./page-pokemon.component.css']
})
export class PagePokemonComponent {
  listPokemon : Pokemon[];
  constructor(private pokemonService:PokemonServiceService,private busService:BusComunicateService){
  }

  ngOnInit():void{
    this.pokemonService.getPagePokemon(1).subscribe({
      next:(pokemons)=>this.listPokemon=pokemons,
      error:(e)=>console.log(e)
    }
    );
  }

  selectPokemon(pokemon:Pokemon){
    console.log(pokemon.name)
    const evento = {
      name: 'miEvento',
      payload: {
        idPokemon:pokemon.id
      }
    };
    this.busService.publish(evento);
  }
  /*getPage(pageNumber: number) {
    const cachedPage = this.cacheService.get(`page${pageNumber}`);
    if (cachedPage) {
      return cachedPage;
    } else {
      this.apiService.getPage(pageNumber).subscribe((data) => {
        this.cachedPages[`page${pageNumber}`] = data;
        this.cacheService.set(`page${pageNumber}`, data);
        return data;
      });
    }
  }*/

}
