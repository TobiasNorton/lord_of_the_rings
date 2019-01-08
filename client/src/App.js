import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characterObjects: [],
      character: [],
      region: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/characters/index').then(response => {
      this.setState(
        {
          characterObjects: response.data
        },
        console.log(this.state.characterObjects)
      )
    })
  }

  _createCharacter = event => {
    event.preventDefault()
    //event target is what we are submitting
    const form = event.target
    console.log(form)
    //FormData takes all of the fields from our form and bundles it up into one Object
    const formData = new FormData(form)
    console.log(formData)
    //POST to the API
    axios.post('/api/characters/create', formData).then(response => {})
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1])
    // }
  }

  // showAllCharacters = () => {
  //   return
  // }

  // addAttribute = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  // addCharacterToAPI = event => {
  //   event.preventDefault()
  //   axios
  //     .post('/api/character/create', {
  //       name: this.state.character.name,
  //       race: this.state.character.race,
  //       weapon: this.state.character.weapon,
  //       strength: this.state.character.strength,
  //       birth_year: this.state.character.birth_year
  //     })
  //     .then(response => {})
  // }

  render() {
    return (
      <div>
        <h1>Lord of The Rings Characters</h1>
        <h3>Let's see what we can do with these</h3>
        <p>Click here to list all of the characters of this tiny, fledgling database.</p>

        {/* <button onClick={this.showAllCharacters}>Click Me</button> */}
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

        <p>Now let's create a character!</p>
        <form onSubmit={this._createCharacter}>
          <input
            type="text"
            name="character[name]"
            id="name"
            // onChange={this.addAttributeValue}
            placeholder="Name"
          />
          <input
            type="text"
            name="character[race]"
            // onChange={this.addAttributeValue}
            id="race"
            placeholder="Race"
          />
          <input
            type="text"
            name="character[region]"
            // onChange={this.addAttributeValue}
            id="region"
            placeholder="Region"
          />
          <input
            type="text"
            name="character[weapon]"
            // onChange={this.addAttributeValue}
            id="weapon"
            placeholder="Weapon"
          />
          <input
            type="text"
            name="character[strength]"
            // onChange={this.addAttributeValue}
            id="strength"
            placeholder="Strength"
          />
          <input
            type="number"
            name="character[birth_year]"
            // onChange={this.addAttributeValue}
            id="birth_year"
            placeholder="Birth Year"
          />
          <button>Add Character</button>
        </form>

        <p>Let's update a character</p>
        <button>Click Me</button>

        <p>Let's delete a region</p>
        <button>Click Me</button>
      </div>
    )
  }
}

export default App
