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
import DropdownMenu from '../../components/dropdown/DropdownMenu';
import TPcardMin from '../../components/trains/TPcardMin';

// ACTION CREATORS
import { fetchLiveTP } from '../../actions/appdata/train_positions';

// NPM MODULES
import { connect } from 'react-redux';
import shortid from 'shortid';

// FILTER CATEGORIES.
/**** NO DOCUMENTATION ON ALL THE POSSIBLE VALUES OF LINECODES AND SERVICE TYPES.
      PLEASE DOUBLE CHECK SPECIFICATIONS. ****/

const LineCodes = ['all', 'RD', 'BL', 'YL', 'OR', 'GR', 'SV'];
const ServiceTypes = ['all', 'Normal', 'NoPassengers', 'Special', 'Unknown'];

class BrowseTrains extends Component {
  state = {
    LineCodeFilter: 'all',
    ServiceTypeFilter: 'all',
    resultCount: 0
  };

  async componentDidMount() {
    this.props.fetchLiveTP();
    // this.timerID = setInterval(this.props.fetchLiveTP, 12000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  isFiltered = (filter, value) => {
    if (filter !== value && filter !== 'all') return true;
    if (filter === value || filter === 'all') return false;
    return true;
  };

  renderTP = trainPosition => {
    const { TrainId, ServiceType, LineCode } = trainPosition;
    const { LineCodeFilter, ServiceTypeFilter, resultCount } = this.state;
    if (
      this.isFiltered(LineCodeFilter, LineCode) ||
      this.isFiltered(ServiceTypeFilter, ServiceType)
    )
      return;
    return (
      <TPcardMin
        key={shortid.generate()}
        TrainId={TrainId}
        ServiceType={ServiceType}
        LineCode={LineCode}
      />
    );
  };

  onLineCodeSelect = ({ target }) => {
    const { value } = target;
    this.setState({ LineCodeFilter: value });
  };

  onServiceTypeSelect = ({ target }) => {
    const { value } = target;
    this.setState({ ServiceTypeFilter: value });
  };

  render() {
    const { TrainPositions } = this.props;
    const { LineCodeFilter, ServiceTypeFilter, resultCount } = this.state;
    return (
      <div>
        <DropdownMenu
          label="Line Color"
          name="lineCodeFilter"
          value={LineCodeFilter}
          onChange={this.onLineCodeSelect}
          items={LineCodes}
        />
        <DropdownMenu
          label="Service Type"
          name="serviceTypeFilter"
          value={ServiceTypeFilter}
          onChange={this.onServiceTypeSelect}
          items={ServiceTypes}
        />
        {/*<p>{resultCount} results</p>*/}
        <div>{TrainPositions && TrainPositions.map(this.renderTP)}</div>
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
