import React, {Component} from 'react'
import pokemonColor from '../..//utils/data/pokemonTypeColors'
import '../../styles/Pokecard.css'
import {generatePokeId, POKE_IMG_URL} from '../../utils/pokeApi'

const Pokecard = props => {
  let pokeId = generatePokeId(props.id)
  let imgSrc = `${POKE_IMG_URL}${pokeId}${props.id}.png`
  return (
    <div
      style={{borderColor: pokemonColor[props.type], borderStyle: 'solid'}}
      className="Pokecard"
    >
      <div className="Pokecard-image">
        <img src={imgSrc} alt={props.name} />
      </div>
      <div className="Pokecard-data">Type: {props.type}</div>
      <div className="Pokecard-data">Exp: {props.base_experience}</div>
      <h1 className="Pokecard-title">{props.name}</h1>
    </div>
  )
}

export default Pokecard
