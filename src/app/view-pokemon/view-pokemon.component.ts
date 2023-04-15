import { Component } from '@angular/core';
import { BusComunicateService } from '../service/bus-comunicate.service';
import { PokemonServiceService } from '../service/pokemon-service.service';


@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.css']
})
export class ViewPokemonComponent {
    idPokemon= "1"
    namePokemon= "Gengar"
    typesPokemon= "Poison"
    urlPokemon="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    constructor(private busComuncation:BusComunicateService,private servicePokemon: PokemonServiceService){

    }
    ngOnInit():void{
      this.busComuncation.subscribe('miEvento', (evento) => {
        this.loadImagePokemon(evento.payload.idPokemon)
      });
    }

    loadImagePokemon(idPokemon:string){
      //console.log(idPokemon)
      this.typesPokemon=""
      this.servicePokemon.getPokemon(idPokemon).subscribe({
        next:(data:any)=>{
          //console.log(data)
          this.urlPokemon = data.sprites.front_default
          this.namePokemon= data.name
          data.types.map( typ => this.typesPokemon=this.typesPokemon+"  "+typ.type.name)
          data.types.map( typ => console.log(typ.type.name))
          this.idPokemon=idPokemon
        },
        error:(e)=>console.log(e)
      })
      //console.log("los types:"+this.typesPokemon)
    }
}