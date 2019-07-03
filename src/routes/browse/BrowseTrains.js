/*
  SAMPLE DATA
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
import TrainPositions from './results/TrainPositions';
import TrainPositionsFilter from './filters/train_positions';

// ACTION CREATORS
import { fetchLiveTP } from '../../actions/appdata/train_positions';

// NPM MODULES
import { connect } from 'react-redux';

class BrowseTrains extends Component {
  state = {
    filters: {
      FilterLineCode: 'all',
      FilterServiceType: 'all',
      FilterCarCount: null,
      FilterCarCountSign: 'equals'
    }
  };

  onFiltersChange = filters => {
    this.setState({ filters });
  };

  render() {
    const { filters } = this.state;
    return (
      <div>
        <TrainPositionsFilter
          filters={filters}
          onChange={this.onFiltersChange}
        />
        <TrainPositions {...this.props} filters={filters} />
      </div>
    );
  }
}

const mapStateToProps = ({ appData }) => {
  return { TrainPositions: appData.TrainPositions };
};

export default connect(
  mapStateToProps,
  { fetchLiveTP }
)(BrowseTrains);
