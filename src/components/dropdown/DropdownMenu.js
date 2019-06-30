import React, { Component } from 'react';
import shortid from 'shortid';

class DropdownMenu extends Component {
  render() {
    const id = shortid.generate();
    const { name, value, onChange, items } = this.props;
    return (
      <div>
        <label htmlFor={id}>{this.props.label}</label>
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
