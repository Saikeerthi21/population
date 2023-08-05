import React from 'react';

function List({ states }) {
  return (
    <table className="state-list">
      <thead>
        <tr>
          <th>State</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        {states.map((state) => (
          <tr key={state.State}>
            <td>{state.State}</td>
            <td>{state.Population}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default List;