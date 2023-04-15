export interface Pokemon{
    id:string
    name:string
}

export interface PokemonResponse{
    name:string
    url:string
}

export interface PaginationResponse{
    count:number
    next:string
    previous:string
    results:PokemonResponse[]
}