import Pokedex from './Pokedex'
import pokemonObject from '../utils/data/pokemonObject.json'
import {getRandomHands} from '../utils/pokeApi'

const Pokegame = () => {
  const [hand1, hand2] = getRandomHands()
  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)

  return (
    <div>
      <Pokedex pokemon={hand1} total_experience={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} total_experience={exp2} isWinner={exp2 > exp1} />
    </div>
  )
}

export default Pokegame
