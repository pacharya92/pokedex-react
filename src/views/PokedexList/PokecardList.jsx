import React, {Component} from 'react'
import pokemonColor from '../..//utils/data/pokemonTypeColors'
import '../../styles/Pokecard.css'
import {generatePokeId, POKE_IMG_URL} from '../../utils/pokeApi'

const Pokecard = props => {
  let pokeId = generatePokeId(props.id)
  let imgSrc = `${POKE_IMG_URL}${pokeId}${props.id}.png`
  let type = props.type.toLowerCase()
  return (
    <div
      style={{
        backgroundColor: pokemonColor[type],
        borderColor: pokemonColor[type],
        borderStyle: 'solid',
        position: 'relative',
      }}
      className="Pokecard"
    >
      <div className="Pokecard-image">
        <div className="top-right">
          <h1 style={{color: pokemonColor[type]}}>{`#${pokeId}${props.id}`}</h1>
        </div>
        <img src={imgSrc} alt={props.name} />
      </div>
      <div style={{backgroundColor: pokemonColor[type]}}>
        <h1 className="Pokecard-title">{props.name}</h1>
      </div>
    </div>
  )
}

export default Pokecard
