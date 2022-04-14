import React, {Component} from 'react'
import '../styles/Pokecard.css'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
const generatePokeId = pokeId => {
  let pokeIdArr = pokeId.toString().split('')
  let pokeIdOffset = ''
  switch (pokeIdArr.length) {
    case 1:
      pokeIdOffset = '00'
      break
    case 2:
      pokeIdOffset = '0'
      break
    case 3:
      pokeIdOffset = ''
      break
    default:
      break
  }
  return pokeIdOffset
}

class Pokecard extends Component {
  render() {
    let pokeId = generatePokeId(this.props.id)
    let imgSrc = `${POKE_API}${pokeId}${this.props.id}.png`
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">Exp: {this.props.base_experience}</div>
      </div>
    )
  }
}

export default Pokecard
