import React, { Component } from 'react';

// COMPONENTS
// import TPcardMin from '../../../components/trains/TPcardMin';
import TPcard from '../../../components/trains/TPcard';

// NPM MODULES
import shortid from 'shortid';

class TrainPositions extends Component {
  async componentDidMount() {
    this.props.fetchLiveTP();
    // this.timerID = setInterval(this.props.fetchLiveTP, 12000);
  }

  componentWillUnmount() {
    // clearInterval(this.timerID);
  }

  isFiltered = (filter, value) => {
    if (filter !== value && filter !== 'all') return true;
    if (filter === value || filter === 'all') return false;
    return true;
  };

  applyFilter = trainPosition => {
    const { FilterLineCode, FilterServiceType } = this.props.filters;
    const { LineCode, ServiceType } = trainPosition;

    if (
      (FilterLineCode !== LineCode && FilterLineCode !== 'all') ||
      (FilterServiceType !== ServiceType && FilterServiceType !== 'all')
    )
      return false;
    if (
      (FilterLineCode === LineCode || FilterLineCode === 'all') &&
      (FilterServiceType === ServiceType || FilterServiceType === 'all')
    )
      return true;
    return false;
  };

  renderTP = trainPosition => {
    const { TrainId, ServiceType, LineCode } = trainPosition;
    return <TPcard key={shortid.generate()} {...trainPosition} />;
  };

  render() {
    const { TrainPositions } = this.props;
    const filtered = TrainPositions
      ? TrainPositions.filter(this.applyFilter)
      : [];
    return (
      <div>
        <p>{filtered.length} results</p>
        <div className="row">{filtered.map(this.renderTP)}</div>
      </div>
    );
  }
}

export default TrainPositions;
