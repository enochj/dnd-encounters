import React, {Component} from 'react';
import './View.css';
import Submit from './Submit.js';
import $ from 'jquery';
import firebase from '../firebase.js';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id ? this.props.id : null,
      name: this.props.name ? this.props.name : '',
      lighting: this.props.lighting ? this.props.lighting : '',
      terrain: this.props.terrain ? this.props.terrain : ''
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

  deleteItem() {
    const encountersRef = firebase.database()
      .ref(`/encounters/${this.state.id}`);
    encountersRef.remove();
  }

  addItem() {
    const encountersRef = firebase.database().ref('encounters');
    const encounter = {
      name: this.state.name,
      lighting: this.state.lighting,
      terrain: this.state.terrain
    }
    encountersRef.push(encounter);
    this.setState({
      name: '',
      lighting: '',
      terrain: '',
    });
    $("#encounter-add-collapse").removeClass('show');
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
            placeholder="Encounter1"
            onChange={this.handleChange}
            value={this.state.name}></input>
        </div>
        <div>
          <label htmlFor="input-lighting">Lighting</label>
          <input
            id="input-lighting"
            type="text"
            name="lighting"
            className="form-control"
            placeholder="Full"
            onChange={this.handleChange}
            value={this.state.lighting}></input>
        </div>
        <div>
          <label htmlFor="input-terrain">Terrain</label>
          <input
            id="input-terrain"
            type="text"
            name="terrain"
            className="form-control"
            placeholder="Open"
            onChange={this.handleChange}
            value={this.state.terrain}></input>
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

export default View;