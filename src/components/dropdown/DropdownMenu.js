import React from 'react';
import shortid from 'shortid';

const DropdownMenu = props => {
  const id = shortid.generate();
  const { name, label, value, items, onChange, className, disabled } = props;
  return (
    <div className={className}>
      {label ? <label htmlFor={id}>{label}</label> : ''}
      <select
        id={id}
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map(item => (
          <option key={shortid.generate()} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
