import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
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
        <body>
          <div className="menu">
            <Button
              data-toggle="collapse"
              data-target="#encounter-collapse">Encounters</Button>
            <div id="encounter-collapse" className="collapse">
              <div id="encounter-options"
                className="menu-options">
                <div className="menu-item">
                  Add an Encounter
                </div>
                <div className="menu-item">
                  Run an Encounter
                </div>
                <div className="menu-item">
                  Edit an Encounter
                </div>
                <div className="menu-item">
                  Delete an Encounter
                </div>
              </div>
            </div>
            <Button
              data-toggle="collapse"
              data-target="#character-collapse">Characters</Button>
            <div id="character-collapse" className="collapse">
              <div id="character-options"
                className="menu-options">
                <div className="menu-item">
                  Add a Character
                </div>
                <div className="menu-item">
                  Edit a Character
                </div>
                <div className="menu-item">
                  Delete a Character
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
