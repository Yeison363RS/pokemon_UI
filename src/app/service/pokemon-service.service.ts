import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { PaginationResponse, Pokemon} from './pokemon-interface';
import { Observable, map,catchError,throwError} from 'rxjs';
import {shareReplay} from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private urlApi="https://pokeapi.co/api/v2/pokemon/";
  private sizePage=20 
  private cachePages: { [cacheKey: string]: Observable<Pokemon[]> } = {};
  private cachePokemons: { [cacheKey: string]: Observable<any> } = {};

  constructor(private http:HttpClient) { }

  getPagePokemon(page:number):Observable<Pokemon[]>{
    const cacheKey=`${this.urlApi}?offset=${page*this.sizePage}&limit=${this.sizePage}`
    if (!this.cachePages[cacheKey]) {
        this.cachePages[cacheKey] = this.http.get<PaginationResponse>(cacheKey).pipe(
        catchError(error => {
          if (error.status === 404) {
            console.log('No se encontró el recurso');
          }
          return throwError(() => error);
        }),
        shareReplay(1),
        map(this.tranform),
      );
    }
    return this.cachePages[cacheKey];
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

  getPokemon(idPokemon:string|number):Observable<any>{
    const cacheKey=`${this.urlApi}${idPokemon}`;
    if (!this.cachePokemons[cacheKey]) {
      this.cachePokemons[cacheKey] = this.http.get<any>(cacheKey).pipe(
        shareReplay(1)
      )
    }
  return this.cachePokemons[cacheKey];
  }
}
