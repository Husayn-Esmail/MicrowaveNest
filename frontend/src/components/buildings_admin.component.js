import React, { Component } from 'react';
import BuildingDataService from '../services/building.service';
import { Link } from 'react-router-dom';

export default class BuildingList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchBuildingName =
      this.onChangeSearchBuildingName.bind(this);
    this.retrieveBuildings = this.retrieveBuildings.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveBuilding = this.setActiveBuilding.bind(this);
    // this.removeAllBuildings = this.removeAllBuildings.bind(this);
    // this.searchBuildingName = this.searchBuildingName.bind(this);

    this.state = {
      buildings: [],
      currentBuilding: null,
      currentIndex: -1,
      searchBuildingName: '',
    };
  }

  componentDidMount() {
    this.retrieveBuildings();
  }

  onChangeSearchBuildingName(e) {
    const searchBuildingName = e.target.value;

    this.setState({
      searchBuildingName: searchBuildingName,
    });
  }

  retrieveBuildings() {
    BuildingDataService.getAll()
      .then((response) => {
        this.setState({
          buildings: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveBuildings();
    this.setState({
      currentBuilding: null,
      currentIndex: -1,
    });
  }

  setActiveBuilding(building, index) {
    this.setState({
      currentBuilding: building,
      currentIndex: index,
    });
  }

  //   removeAllBuildings() {
  //     BuildingDataService.deleteAll()
  //       .then((response) => {
  //         console.log(response.data);
  //         this.refreshList();
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }

  //   searchBuildingName() {
  //     BuildingDataService.findByName(this.state.searchBuildingName)
  //       .then((response) => {
  //         this.setState({
  //           buildings: response.data,
  //         });
  //         console.log(response.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }

  render() {
    const { searchBuildingName, buildings, currentBuilding, currentIndex } =
      this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Name"
              value={searchBuildingName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchBuildingName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Buildings List</h4>

          <ul className="list-group">
            {buildings &&
              buildings.map((building, index) => (
                <li
                  className={
                    'list-group-item ' +
                    (index === currentIndex ? 'active' : '')
                  }
                  onClick={() => this.setActiveBuilding(building, index)}
                  key={index}
                >
                  {building.name}
                </li>
              ))}
          </ul>

          {/* <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllBuildings}
          >
            Remove All
          </button> */}
        </div>
        <div className="col-md-6">
          {currentBuilding ? (
            <div>
              <h4>Building</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{' '}
                {currentBuilding.name}
              </div>
              <div>
                <label>
                  <strong>Building Hours:</strong>
                </label>{' '}
                {currentBuilding.building_hours}
              </div>

              <Link
                to={'/buildings/' + currentBuilding.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Building...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
