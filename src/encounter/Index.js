import React, {Component} from 'react';
import View from './View.js';

class Index extends Component {
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
            <View {...item}/>
          </div>
        )
      })}
    </div>
  }
}

export default Index;