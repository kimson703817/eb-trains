/**** Displays TrainPosition data
  API call: https://api.wmata.com/TrainPositions/TrainPositions?contentType={contentType}
****/

import React from 'react';

const colors = {
  RD: { color: 'white', backgroundColor: 'red' },
  BL: { color: 'white', backgroundColor: 'blue' },
  YL: { color: 'white', backgroundColor: 'yellow' },
  OR: { color: 'white', backgroundColor: 'orange' },
  GR: { color: 'white', backgroundColor: 'gray' },
  SV: { color: 'white', backgroundColor: 'silver' }
};

const TPcardMin = props => {
  const { TrainId, ServiceType, LineCode } = props;
  const color = LineCode ? colors[LineCode].color : null;
  const backgroundColor = LineCode ? colors[LineCode].backgroundColor : null;

  return (
    <div
      style={{ width: '20rem', margin: '1rem', borderColor: 'black' }}
      className="card"
    >
      <div className="card-body">
        <h5 className="card-title">{TrainId}</h5>
        <div className="card-text">{ServiceType}</div>
        {LineCode ? (
          <div
            style={{ color, backgroundColor, width: '1.45rem' }}
            className="card-text"
          >
            {LineCode}
          </div>
        ) : (
          <div className="card-text">Not in service</div>
        )}
      </div>
    </div>
  );
};

export default TPcardMin;
