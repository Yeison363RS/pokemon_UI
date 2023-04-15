import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { PaginationResponse, Pokemon,PokemonResponse} from './pokemon-interface';
import { Observable, map, tap} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private urlApi="https://pokeapi.co/api/v2/pokemon/";
  private sizePage=20 

  constructor(private http:HttpClient) { }

  getPagePokemon(page:number):Observable<Pokemon[]>{
    return this.http.get<PaginationResponse>(`${this.urlApi}?offset=${page*this.sizePage}&limit=${this.sizePage}`).pipe(
      map(this.tranform)
    );
  }

  tranform(responsePagiantion:PaginationResponse):Pokemon[]{
    const pokemonslist:Pokemon[] = responsePagiantion.results.map(pokemon=>{
            const id =  pokemon.url.split("/")[6];
            const name=pokemon.name;
            return {
              id,
              name
            }
          })
    return pokemonslist
  } 
  getPokemon(idPokemon:string):Observable<any>{
    return this.http.get(`${this.urlApi}${idPokemon}`);
  }
}
