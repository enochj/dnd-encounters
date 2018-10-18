import React from 'react'
import { Button } from 'react-bootstrap'
import './Menu.css'
import Encounters from '../encounter/Encounters'
import Encounter from '../encounter/Encounter'
import Character from '../character/Character'
import Characters from '../character/Characters'

const Menu = ({encounters, characters}) =>
  <div className="menu">
    <Button
      data-toggle="collapse"
      data-target="#encounter-collapse">Encounters</Button>
    <div id="encounter-collapse" className="collapse">
      <div id="encounter-options"
        className="menu-options">
        <Button
          className="menu-item"
          data-toggle="collapse"
          data-target="#encounter-add-collapse">
          Add an Encounter
        </Button>
        <div id="encounter-add-collapse" className="collapse">
          <Encounter/>
        </div>
        <div className="menu-item">
          Run an Encounter
        </div>
        <Button
          className="menu-item"
          data-toggle="collapse"
          data-target="#encounter-view-collapse">
          View Encounters
        </Button>
        <div id="encounter-view-collapse" className="collapse">
          <Encounters encounters={encounters}/>
        </div>
      </div>
    </div>
    <Button
      data-toggle="collapse"
      data-target="#character-collapse">Characters</Button>
    <div id="character-collapse" className="collapse">
      <div id="character-options"
        className="menu-options">
        <Button
          className="menu-item"
          data-toggle="collapse"
          data-target="#character-add-collapse">
          Add a Character
        </Button>
        <div id="character-add-collapse" className="collapse">
          <Character/>
        </div>
        <Button className="menu-item"
          data-toggle="collapse"
          data-target="#character-view-collapse">
          View Characters
        </Button>
        <div id="character-view-collapse" className="collapse">
          <Characters characters={characters}/>
          Delete a Character
        </div>
      </div>
    </div>
  </div>;

export default Menu;