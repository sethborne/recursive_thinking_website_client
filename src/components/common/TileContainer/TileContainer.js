import React from 'react';
import HomeScreenQuote from '../../HomeScreenQuote/HomeScreenQuote';

// Accepts:
// a config prop
// config = {
//   { perRow: <integer> }
// }

// a data prop
// data={{
//   array: <array>,
// }}
// config is used for layout, then render the data

const TileContainer = ({ config: { perRow }, content }) => {
  if (perRow - 1 > content.length) {
    return <div>Need to do more Rows</div>;
  }
  return (
    <ul className={`fc-row fc-col-${perRow}`}>
      {content.map((obj) => {
        const { id } = obj;
        return (
          <li key={id} className="fi-cell">
            <HomeScreenQuote data={obj} />
          </li>
        );
      })}
    </ul>
  );
};

export default TileContainer;
