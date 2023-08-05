import React from 'react';

function Status({ loading }) {
  return <p>Status: {loading ? 'In Progress' : 'Completed'}</p>;
}

export default Status;