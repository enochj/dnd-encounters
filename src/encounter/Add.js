import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import $ from 'jquery'; 
import './Add.css';
import firebase from '../firebase.js';

class Add extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lighting: '',
      terrain: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return <form
      className="form-group"
      onSubmit={this.handleSubmit}>
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
      <Button className="btn" type="submit">Add</Button>
    </form>;
  }
}

export default Add;