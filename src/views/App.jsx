import React, {Component} from 'react'
import '../styles/App.css'
import Pokedex from '../views/Pokedex'
import Pokegame from '../views/Pokegame'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokegame />
      </div>
    )
  }
}

export default App
