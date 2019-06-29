import React, { Component } from 'react';

import axios from 'axios';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import shortid from 'shortid';

import { WMATA } from '../../config';

// User Stories:

// As a user I'd like to be able to see all the trains!
// As a user I'd like to be able to filter by train line color.
// As a user I'd like to be able to filter by different service types.
// As a user I'd like to be able to filter by car count.
// As a user I'd like to be able to visually distinguish trains on different colored lines from each other.
// As a user I'd like to be able to visually distinguish between different car counts.
// As a user I'd like to be able to distinguish trains by different service types.
// As a user I'd like to see the page automatically update as the trains' positions update

/*
  Routes:
  /
  /browse/trains
  /browse/trains/:id
  /


  {
    CarCount: 6
    CircuitId: 2494
    DestinationStationCode: null
    DirectionNum: 1
    LineCode: null
    SecondsAtLocation: 6733
    ServiceType: "Unknown"
    TrainId: "151"
    TrainNumber: "000"
  }



*/

class BrowseTrains extends Component {
  state = {
    TrainPositions: []
  };

  async componentDidMount() {
    const { api_key, api } = WMATA;
    const req = {
      method: 'get',
      url: `${api}/trainpositions/trainpositions?contentType=json`,
      headers: { api_key: `${api_key}` }
    };

    try {
      const res = await axios(req);
      const { TrainPositions } = res.data;
      this.setState({ TrainPositions });
      console.log(TrainPositions);
    } catch (error) {
      console.log(error);
    }
  }

  renderTP = trainPosition => {
    return (
      <div key={shortid.generate()} className="card">
        <div className="card-body">
          <h5 className="card-title">{trainPosition.TrainId}</h5>
          <div className="card-text">{trainPosition.ServiceType}</div>
          <div className="card-text">{trainPosition.LineCode}</div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.state.TrainPositions.map(this.renderTP)}</div>;
  }
}

export default BrowseTrains;
