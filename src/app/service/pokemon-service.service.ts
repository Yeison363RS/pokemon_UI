import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { PaginationResponse, Pokemon} from './pokemon-interface';
import { Observable, map,shareReplay,ShareReplayConfig} from 'rxjs';


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
  findPokemon(indice:string){
    const cacheKey=`${this.urlApi}${indice}`;
    const config: ShareReplayConfig= { bufferSize: 1, refCount: true};
    return this.http.get<any>(cacheKey).pipe(
      map(response =>{
        response.cacheKey = cacheKey
        return response;
      }),
      shareReplay(config)
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
    const cacheKey=`${this.urlApi}${idPokemon}`;
    const config: ShareReplayConfig= { bufferSize: 1, refCount: true};
    return this.http.get<any>(cacheKey).pipe(
      map(response =>{
        response.cacheKey = cacheKey
        return response;
      }),
      shareReplay(config)
    );
  }
}
