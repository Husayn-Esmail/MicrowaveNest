import React, { Component } from 'react';
import BuildingsDataService from '../services/building.service';

export default class AddBuilding extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeHours = this.onChangeHours.bind(this);
    this.saveBuilding = this.saveBuilding.bind(this);
    this.newBuilding = this.newBuilding.bind(this);

    this.state = {
      id: null,
      name: '',
      hours: '',

      submitted: false,
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeHours(e) {
    this.setState({
      hours: e.target.value,
    });
  }

  saveBuilding() {
    var data = {
      name: this.state.name,
      hours: this.state.hours,
    };

    BuildingsDataService.create(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          hours: response.data.hours,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newBuilding() {
    this.setState({
      id: null,
      name: '',
      hours: '',

      submitted: false,
    });
  }
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newBuilding}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="hours">hours</label>
              <input
                type="text"
                className="form-control"
                id="hours"
                required
                value={this.state.hours}
                onChange={this.onChangeHours}
                name="hours"
              />
            </div>

            <button onClick={this.saveBuilding} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
