import React from 'react';

// COMPONENTS
import DropdownMenu from '../../../../components/dropdown/DropdownMenu';

// FILTER OPTIONS. PLEASE DOUBLE CHECK SPECIFICATIONS
const options = ['all', 'RD', 'BL', 'YL', 'OR', 'GR', 'SV'];

const LineCodeFilters = props => {
  const { className, value, onChange } = props;
  return (
    <DropdownMenu
      className={className}
      label="Line Color"
      name="lineCodeFilter"
      value={value}
      onChange={onChange}
      items={options}
    />
  );
};

export default LineCodeFilters;
