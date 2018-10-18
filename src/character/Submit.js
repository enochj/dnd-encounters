import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './Submit.css';


class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.item.id,
    }
  }

  render() {
    return this.props.item.id ?
      <Button onClick={this.props.deleteItem}>Remove</Button>
      : <Button onClick={this.props.addItem}>Add</Button>
  }
}

export default Submit;