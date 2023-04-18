import { TypesPokemonPipe } from './types-pokemon.pipe';

describe('TypesPokemonPipe', () => {
  it('create an instance', () => {
    const pipe = new TypesPokemonPipe();
    const text = " fire poison ground electric"
    expect(pipe.transform(text)).toEqual("fire,poison,ground,electric");
  });
});
