import React, {Component} from 'react';
import Encounter from './Encounter.js';

class Encounters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      encounters: this.props.encounters
    }
  }

  render() {
    return <div>
      {this.props.encounters.map((item) => {
        return (
          <div key={item.id}>
            <Encounter {...item}/>
          </div>
        )
      })}
    </div>
  }
}

export default Encounters;