import React, { Component } from 'react';
import shortid from 'shortid';

class DropdownMenu extends Component {
  render() {
    const id = shortid.generate();
    const { name, label, value, items, onChange, className } = this.props;
    return (
      <div className={className}>
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        >
          {items.map(item => (
            <option key={shortid.generate()} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default DropdownMenu;
