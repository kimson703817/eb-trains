import React from 'react';
import shortid from 'shortid';

// COMPONENTS
import DropdownMenu from '../../../../components/dropdown/DropdownMenu';

const CarCountFilter = props => {
  const id = shortid.generate();
  const { className, value, onChange, disabled, onToggle } = props;
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
        <span className="col-sm-4" />
        <input
          id={id}
          type="number"
          className="form-control col-sm-4"
          min="0"
          name="carCountFilter"
          value={value.toString()}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default CarCountFilter;
