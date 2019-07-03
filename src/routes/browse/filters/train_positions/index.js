import React, { Component } from 'react';

// COMPONENTS
import CarCountFilter from './CarCountFilter';
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

  onCarCountFilter = ({ target }) => {
    const { value } = target;
    const number = parseInt(value);
    const { filters } = this.props;
    const newFilters = { ...filters, FilterCarCount: number };
    this.props.onChange(newFilters);
  };

  onCarCountFilterSignChange = ({ target }) => {
    const { value } = target;
    const { filters } = this.props;
    const newFilters = { ...filters, FilterCarCountSign: value };
    this.props.onChange(newFilters);
  };

  onCarCountFilterToggle = () => {
    const { filters } = this.props;
    const FilterCarCount = filters.FilterCarCount === null ? 0 : null;
    const newFilters = { ...filters, FilterCarCount };
    this.props.onChange(newFilters);
  };

  render() {
    const {
      FilterLineCode,
      FilterServiceType,
      FilterCarCount,
      FilterCarCountSign
    } = this.props.filters;
    const carCountToggled = FilterCarCount !== null;
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
        <ServiceTypeFilter
          className="col-sm-2"
          value={FilterServiceType}
          onChange={this.onServiceTypeFilter}
        />
        <CarCountFilter
          className="col-sm-4"
          onToggle={this.onCarCountFilterToggle}
          value={carCountToggled ? FilterCarCount : 0}
          onValueChange={this.onCarCountFilter}
          compareSign={FilterCarCountSign}
          onSignChange={this.onCarCountFilterSignChange}
          disabled={!carCountToggled && true}
        />
      </div>
    );
  }
}

export default TrainPositionsFilter;
