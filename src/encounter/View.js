import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './View.css';

class View extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      {this.props.encounters.map((item) => {
        return (
          <div key={item.id}>
            <div>Name: {item.name}</div>
            <div>Lighting: {item.lighting}</div>
            <div>Terrain: {item.terrain}</div>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </div>
        )
      })}
    </div>
  }
}

export default View;