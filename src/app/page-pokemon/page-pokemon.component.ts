import { AfterContentInit, Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../service/pokemon-service.service';
import { Pokemon } from '../service/pokemon-interface';
import { Observable } from 'rxjs';
import { BusComunicateService } from '../service/bus-comunicate.service';

@Component({
  selector: 'app-page-pokemon',
  templateUrl: './page-pokemon.component.html',
  styleUrls: ['./page-pokemon.component.css']
})
export class PagePokemonComponent implements OnInit{
  listPokemon : Pokemon[]
  numberPage=0
  selectedObject: Pokemon;


  constructor(private pokemonService:PokemonServiceService,private busService:BusComunicateService){
  }

  ngOnInit():void{
    this.updatePage()
  }

  loadFirstPokemonOnList(){
    this.selectPokemon(this.listPokemon[0])
  }

  selectPokemon(pokemon:Pokemon){
    this.selectedObject = pokemon;
    const evento = {
      name: 'miEvento',
      payload: {
        idPokemon:pokemon.id,
        namePokemon:pokemon.name
      }
    };
    this.busService.publish(evento);
  }
  updatePage(){
    this.pokemonService.getPagePokemon(this.numberPage).subscribe({
      next:(pokemons)=>{this.listPokemon=pokemons
      this.loadFirstPokemonOnList()},
      error:(e)=>console.log(e)
    }
    );
    
  }
  getNextPage(){
    this.numberPage++
    this.updatePage()
  }
  getPreviousPage(){
    if(this.numberPage!=0){
      this.numberPage--
      this.updatePage()
    }
  }
}
