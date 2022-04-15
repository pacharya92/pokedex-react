import React, {Component} from 'react'
import '../../styles/Pokecard.css'
import PokecardAll from './PokecardList'
import pokemonObject from '../../utils/data/pokemonObject.json'

const PokedexAll = () => {
  return (
    <div style={{backgroundColor: '#E8E8E8'}}>
      <div className="Pokedex-cards">
        {pokemonObject.map(pokemon => (
          <PokecardAll
            id={pokemon.id}
            name={pokemon.name.english}
            type={pokemon.type[0]}
            base_experience={pokemon.base_experience}
          />
        ))}
      </div>
    </div>
  )
}

export default PokedexAll
