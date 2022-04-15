import React, {Component} from 'react'
import '../../styles/Pokecard.css'
import PokecardAll from './PokecardList'
import pokemonObject from '../../utils/data/pokemonObject.json'

const PokedexAll = () => {
  return (
    <div className="Pokedex-cards">
      {pokemonObject.pokemon.map(pokemon => (
        <PokecardAll
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          base_experience={pokemon.base_experience}
        />
      ))}
    </div>
  )
}

export default PokedexAll
