import React, {Component} from 'react'
import Pokecard from './Pokecard'
import '../styles/Pokedex.css'
import '../styles/Pokedex-cards.css'

class Pokedex extends Component {
  render() {
    let title = ''
    this.props.isWinner
      ? (title = <h1 className="Pokedex-winner">Winning Hand</h1>)
      : (title = <h1 className="Pokedex-loser">Losing Hand</h1>)
    return (
      <div className="Pokedex">
        <p>Total Experience: {this.props.total_experience}</p>
        {title}
        <div className="Pokedex-cards">
          {this.props.pokemon.map(p => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              base_experience={p.base_experience}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex
