import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import $ from 'jquery'; 

import './Add.css';

class Add extends Component {
  handleClick = () => {
    $("#encounter-add-collapse").removeClass('show');
  }
  render() {
    return <form>
      <div>
        <label>Name</label>
        <input></input>
      </div>
      <div>
        <label>Lighting</label>
        <input></input>
      </div>
      <div>
        <label>Terrain</label>
        <input></input>
      </div>
      <Button onClick={this.handleClick}>Add</Button>
    </form>;
  }
}

export default Add;