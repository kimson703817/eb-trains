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
import shortid from 'shortid';

class BrowseTrains extends Component {
  state = {
    filters: {
      FilterLineCode: 'all',
      FilterServiceType: 'all',
      FilterCarCount: null
    }
  };

  onFiltersChange = filters => {
    this.setState({ filters });
  };

  onCarCountFilterToggle = () => {
    const { filters } = this.state;
    const FilterCarCount = filters.FilterCarCount === null ? 0 : null;
    const newFilters = { ...filters, FilterCarCount };
    this.setState({ filters: newFilters });
  };

  render() {
    const { filters } = this.state;
    return (
      <div>
        <TrainPositionsFilter
          filters={filters}
          onChange={this.onFiltersChange}
          onCarCountFilterToggle={this.onCarCountFilterToggle}
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
