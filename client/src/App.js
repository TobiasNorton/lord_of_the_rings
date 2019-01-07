import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characterObjects: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/characters/index').then(response => {
      this.setState({
        characterObjects: response.data
      })
    })
  }

  // showAllCharacters = () => {
  //   return
  // }

  render() {
    return (
      <div>
        <h1>Lord of The Rings Characters</h1>
        <h3>Let's see what we can do with these</h3>
        <p>Click here to list all of the characters of this tiny, fledgling database.</p>

        <button onClick={this.showAllCharacters}>Click Me</button>
        <div>
          {this.state.characterObjects.map((characterObject, index) => {
            return (
              <div key={index} className="character-profile">
                <p>Name: {characterObject.name}</p> <p>Race: {characterObject.race}</p>{' '}
                <p>Region: {characterObject.region}</p>
                <p>Weapon: {characterObject.weapon}</p> <p>Strength: {characterObject.strength}</p>{' '}
                <p>Birth Year: {characterObject.birth_year}</p>
              </div>
            )
          })}
        </div>

        <p>Let's update a character</p>
        <button>Click Me</button>

        <p>Let's delete a region</p>
        <button>Click Me</button>

        <p>Let's Create a Region!</p>
        <button>Click Me</button>
      </div>
    )
  }
}

export default App
