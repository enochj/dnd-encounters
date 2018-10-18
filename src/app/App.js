import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from '../menu/Menu';
import firebase from '../firebase.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentEncounter: '',
      encounters: [],
      characters: [],
    }
  }

  componentDidMount() {
    const encountersRef = firebase.database().ref('encounters');
    encountersRef.on('value', (snapshot) => {
      let encounters = snapshot.val();
      let newState = [];
      for (let encounter in encounters) {
        newState.push({
          id: encounter,
          name: encounters[encounter].name,
          lighting: encounters[encounter].lighting,
          terrain: encounters[encounter].terrain
        });
      }
      this.setState({
        encounters: newState
      });
    })

    const charactersRef = firebase.database().ref('characters');
    charactersRef.on('value', (snapshot) => {
      let characters = snapshot.val();
      let newState = [];
      for (let character in characters) {
        newState.push({
          id: character,
          name: characters[character].name,
          race: characters[character].race,
          class: characters[character].class
        });
      }
      this.setState({
        characters: newState
      });
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload this shit.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Menu
          encounters={this.state.encounters}
          characters={this.state.characters}
        />
      </div>
    );
  }
}

export default App;
