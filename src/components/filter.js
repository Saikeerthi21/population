import React from 'react';

function Filter({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Filter"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Filter;
