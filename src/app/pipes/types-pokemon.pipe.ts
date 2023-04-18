import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'typesPokemon'
})
export class TypesPokemonPipe implements PipeTransform {

  transform(types: string): string {
    return types.slice(1).split(" ").join(",")
  }

}
