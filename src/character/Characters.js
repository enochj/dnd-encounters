import React, {Component} from 'react';
import Character from './Character.js';

class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: this.props.characters
    }
  }

  render() {
    return <div>
      {this.props.characters.map((item) => {
        return (
          <div key={item.id}>
            <Character {...item}/>
          </div>
        )
      })}
    </div>
  }
}

export default Characters;