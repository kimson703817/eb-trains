import React, { Component } from 'react';

// COMPONENTS
// import TPcardMin from '../../../components/trains/TPcardMin';
import TPcard from '../../../components/trains/TPcard';

// NPM MODULES
import shortid from 'shortid';

class TrainPositions extends Component {
  async componentDidMount() {
    this.props.fetchLiveTP();
    this.timerID = setInterval(this.props.fetchLiveTP, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  applyFilters = trainPosition => {
    const { FilterLineCode, FilterServiceType } = this.props.filters;
    const { LineCode, ServiceType } = trainPosition;
    const CarCount = parseInt(trainPosition.CarCount, 10);

    if (
      (FilterLineCode !== LineCode && FilterLineCode !== 'all') ||
      (FilterServiceType !== ServiceType && FilterServiceType !== 'all')
    )
      return false;
    if (
      (FilterLineCode === LineCode || FilterLineCode === 'all') &&
      (FilterServiceType === ServiceType || FilterServiceType === 'all')
    )
      if (this.applyCarCountFilter(CarCount)) return true;
    return false;
  };

  applyCarCountFilter = CarCount => {
    const { FilterCarCount } = this.props.filters;
    if (FilterCarCount === null || isNaN(FilterCarCount)) return true;

    if (FilterCarCount === CarCount) return true;
    return false;
  };

  renderTP = trainPosition => {
    const { TrainId, ServiceType, LineCode } = trainPosition;
    return <TPcard key={shortid.generate()} {...trainPosition} />;
  };

  render() {
    const { TrainPositions } = this.props;
    const { FilterCarCount } = this.props.filters;
    let filtered = TrainPositions
      ? TrainPositions.filter(this.applyFilters)
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
