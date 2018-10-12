import React from 'react'
import { Button } from 'react-bootstrap'
import './Menu.css'
import Add from '../encounter/Add'
import View from '../encounter/View'

const Menu = ({encounters}) =>
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
          <Add/>
        </div>
        <div className="menu-item">
          Run an Encounter
        </div>
        <Button
          className="menu-item"
          data-toggle="collapse"
          data-target="#encounter-view-collapse">
          View an Encounter
        </Button>
        <div id="encounter-view-collapse" className="collapse">
          <View encounters={encounters}/>
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
          View a Character
        </div>
        <div className="menu-item">
          Delete a Character
        </div>
      </div>
    </div>
  </div>;

export default Menu;