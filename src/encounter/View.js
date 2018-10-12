import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './View.css';

class View extends Component {
  render() {
    return <div>
      <div>Name: Encounter1</div>
      <div>Lighting: Full</div>
      <div>Terrain: Open</div>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </div>
  }
}

export default View;