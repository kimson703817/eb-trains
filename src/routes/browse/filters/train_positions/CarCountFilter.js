import React from 'react';
import shortid from 'shortid';

// COMPONENTS
import DropdownMenu from '../../../../components/dropdown/DropdownMenu';

const CarCountFilter = props => {
  const id = shortid.generate();
  const { className, onToggle } = props;
  const { value, onValueChange } = props;
  const { compareSign, onSignChange } = props;
  const { disabled } = props;
  return (
    <div className={className}>
      <label htmlFor={id}>
        <input
          type="checkbox"
          name="toggleCarCountFilter"
          value={false}
          onChange={onToggle}
        />{' '}
        Car Count
      </label>
      <div className="row">
        <DropdownMenu
          className="col-sm-6"
          name="compareCarCountFilter"
          value={compareSign}
          onChange={onSignChange}
          items={['equals', 'less than', 'greater than']}
          disabled={disabled}
        />
        <input
          id={id}
          type="number"
          className="form-control col-sm-2"
          min="0"
          name="carCountFilter"
          value={value.toString()}
          onChange={onValueChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default CarCountFilter;
