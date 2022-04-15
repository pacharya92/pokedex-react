import pokemonObject from '../utils/data/pokemonObject.json'

const POKE_IMG_URL =
  'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

function generatePokeId(pokeId) {
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

const getRandomHands = () => {
  let hand1 = []
  let hand2 = [...pokemonObject.pokemon]
  while (hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length)
    let randPokemon = hand2.splice(randIdx, 1)[0]
    hand1.push(randPokemon)
  }
  return [hand1, hand2]
}

export {generatePokeId, getRandomHands, POKE_IMG_URL}
