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

  renderFilters = () => {
    const { LineCodeFilter, ServiceTypeFilter, resultCount } = this.state;
    return (
      <div
        style={{ textAlign: 'center', margin: '0.7rem 1rem' }}
        className="row"
      >
        <h5 style={{ paddingTop: '2.4rem' }} className="col-sm-1">
          Filters
        </h5>
        <div className="col-sm-1" />
        <DropdownMenu
          className="col-sm-2"
          label="Line Color"
          name="lineCodeFilter"
          value={LineCodeFilter}
          onChange={this.onLineCodeSelect}
          items={LineCodes}
        />
        <div className="col-sm-1" />
        <DropdownMenu
          className="col-sm-2"
          label="Service Type"
          name="serviceTypeFilter"
          value={ServiceTypeFilter}
          onChange={this.onServiceTypeSelect}
          items={ServiceTypes}
        />
      </div>
    );
  };

  render() {
    const { TrainPositions } = this.props;
    return (
      <div>
        {this.renderFilters()}
        {/*<p>{resultCount} results</p>*/}
        <div className="row">
          {TrainPositions && TrainPositions.map(this.renderTP)}
        </div>
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
