import { Component ,EventEmitter, Output} from '@angular/core';
import { BusComunicateService } from '../service/bus-comunicate.service';
import { PokemonServiceService } from '../service/pokemon-service.service';


@Component({
  selector: 'app-view-pokemon',
  templateUrl: './view-pokemon.component.html',
  styleUrls: ['./view-pokemon.component.css']
})
export class ViewPokemonComponent {
    idPokemon= ""
    namePokemon= ""
    types= ""
    @Output() pokemonName = new EventEmitter<string>();
    urlPokemon=""
    constructor(private busComuncation:BusComunicateService,private servicePokemon: PokemonServiceService){

    }
    ngOnInit():void{
      this.busComuncation.subscribe('loadPokemonDetails', (evento) => {
        this.loadImagePokemon(evento.payload.idPokemon)
      });
    }

    loadImagePokemon(idPokemon:string){
      this.types=""
      this.servicePokemon.getPokemon(idPokemon).subscribe({
        next:(data)=>this.assignDataPokemon(data) ,
        error:(e)=>{
          this.namePokemon="Not found"
          this.idPokemon=""
          this.urlPokemon=""
          console.log(e)
        }
      })
    }
    assignDataPokemon(data:any){
        this.urlPokemon = data.sprites.front_default
        const urlAnimate = data.sprites.versions['generation-v']['black-white'].animated.front_default
        if(urlAnimate != null){
          this.urlPokemon = urlAnimate
        }
        this.namePokemon = data.name
        this.pokemonName.emit(this.namePokemon);
        this.idPokemon = data.id
        data.types.map( object => {
        this.types = this.types+" "+object.type.name.charAt(0).toUpperCase() + object.type.name.slice(1)})
    }
}
