import React from 'react';

// COMPONENTS
import DropdownMenu from '../../../../components/dropdown/DropdownMenu';

// FILTER OPTIONS. PLEASE DOUBLE CHECK SPECIFICATIONS
const options = ['all', 'Normal', 'NoPassengers', 'Special', 'Unknown'];

const ServiceTypeFilter = props => {
  const { className, value, onChange } = props;
  return (
    <DropdownMenu
      className={className}
      label="Service Type"
      name="serviceTypeFilter"
      value={value}
      onChange={onChange}
      items={options}
    />
  );
};

export default ServiceTypeFilter;
