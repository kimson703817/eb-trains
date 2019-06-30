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

import React, { Component } from 'react';

// COMPONENTS
import TPcardMin from '../../components/trains/TPcardMin';

// ACTION CREATORS
import { fetchLiveTP } from '../../actions/appdata/train_positions';

// NPM MODULES
import axios from 'axios';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import shortid from 'shortid';

// CONFIG
import { WMATA } from '../../config';

class BrowseTrains extends Component {
  state = {
    TrainPositions: []
  };

  async componentDidMount() {
    this.props.fetchLiveTP();
  }

  renderTP = trainPosition => {
    const { TrainId, ServiceType, LineCode } = trainPosition;
    return (
      <TPcardMin
        key={shortid.generate()}
        TrainId={TrainId}
        ServiceType={ServiceType}
        LineCode={LineCode}
      />
    );
  };

  render() {
    const { TrainPositions } = this.props;
    return <div>{TrainPositions && TrainPositions.map(this.renderTP)}</div>;
  }
}

const mapStateToProps = ({ appData }) => {
  return { TrainPositions: appData.TrainPositions };
};

export default connect(
  mapStateToProps,
  { fetchLiveTP }
)(BrowseTrains);
