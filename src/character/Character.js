import React, {Component} from 'react';
import './Character.css';
import Submit from './Submit.js';
import $ from 'jquery';
import firebase from '../firebase.js';

class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id ? this.props.id : null,
      name: this.props.name ? this.props.name : '',
      race: this.props.race ? this.props.race : '',
      class: this.props.class ? this.props.class : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

/*TODO: Edit Item*/

  deleteItem() {
    const charactersRef = firebase.database()
      .ref(`/characters/${this.state.id}`);
    charactersRef.remove();
  }

  addItem() {
    {/* TODO Check for Duplicate */}
    const encountersRef = firebase.database().ref('characters');
    const encounter = {
      name: this.state.name,
      race: this.state.race,
      class: this.state.class
    }
    encountersRef.push(encounter);
    this.setState({
      name: '',
      race: '',
      class: '',
    });
    $("#character-add-collapse").removeClass('show');
  }

  render() {
    return <form className="form-group">
        <div>
          <label htmlFor="input-name">Name</label>
          <input
            id="input-name"
            type="text"
            name="name"
            className="form-control"
            placeholder="Character1"
            onChange={this.handleChange}
            value={this.state.name}></input>
        </div>
        <div>
          <label htmlFor="input-race">Race</label>
          <input
            id="input-race"
            type="text"
            name="race"
            className="form-control"
            placeholder="Human"
            onChange={this.handleChange}
            value={this.state.race}></input>
        </div>
        <div>
          <label htmlFor="input-class">Class</label>
          <input
            id="input-class"
            type="text"
            name="class"
            className="form-control"
            placeholder="Fighter"
            onChange={this.handleChange}
            value={this.state.class}></input>
        </div>
        <Submit
          className="btn"
          type="submit"
          item={this.state}
          addItem={this.addItem}
          deleteItem={this.deleteItem}
        ></Submit>
      </form>;
  }
}

export default Character;