import React, { Component } from 'react';

// COMPONENTS
import LineCodeFilter from './LineCodeFilter';
import ServiceTypeFilter from './ServiceTypeFilter';

class TrainPositionsFilter extends Component {
  onLineCodeFilter = ({ target }) => {
    const { value } = target;
    const { filters } = this.props;
    const newFilters = { ...filters, FilterLineCode: value };
    this.props.onChange(newFilters);
  };

  onServiceTypeFilter = ({ target }) => {
    const { value } = target;
    const { filters } = this.props;
    const newFilters = { ...filters, FilterServiceType: value };
    this.props.onChange(newFilters);
  };

  render() {
    const { FilterLineCode, FilterServiceType } = this.props.filters;
    return (
      <div
        style={{ textAlign: 'center', margin: '0.7rem 1rem' }}
        className="row"
      >
        <h5 style={{ paddingTop: '2.4rem' }} className="col-sm-1">
          Filters
        </h5>
        <div className="col-sm-1" />
        <LineCodeFilter
          className="col-sm-2"
          value={FilterLineCode}
          onChange={this.onLineCodeFilter}
        />
        <div className="col-sm-1" />
        <ServiceTypeFilter
          className="col-sm-2"
          value={FilterServiceType}
          onChange={this.onServiceTypeFilter}
        />
      </div>
    );
  }
}

export default TrainPositionsFilter;
