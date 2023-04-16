import { Component } from '@angular/core';
import { BusComunicateService } from '../service/bus-comunicate.service';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.css']
})
export class PokemonHeaderComponent {
      namePokemon=""

      constructor(private comunicationBus:BusComunicateService){}

      ngOnInit(){
        this.comunicationBus.subscribe('miEvento', (evento) => {
          this.namePokemon=evento.payload.namePokemon
        });
      }
       
}
