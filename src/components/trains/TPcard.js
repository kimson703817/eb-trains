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

const TPcard = props => {
  const { TrainId, ServiceType, LineCode, SecondsAtLocation, CarCount } = props;
  const color = LineCode ? colors[LineCode].color : null;
  const backgroundColor = LineCode ? colors[LineCode].backgroundColor : null;

  return (
    <div
      style={{
        width: '20rem',
        margin: '1rem',
        borderColor: 'black'
      }}
      className="card"
    >
      <div className="card-body">
        <div className="card-title">
          <div className="row">
            <h5 className="col-sm-5">
              <b>Train ID:</b> {TrainId}
            </h5>
            <span className="col-sm-4" />
            {LineCode ? (
              <span
                style={{
                  color,
                  backgroundColor,
                  width: '1.45rem',
                  height: '1.47rem'
                }}
                className="card-text col-sm-2"
              >
                {LineCode}
              </span>
            ) : (
              <span>
                <span className="card-text col">(Not in service)</span>
              </span>
            )}
          </div>
        </div>
        <div style={{ fontSize: '1.1rem' }}>
          <div className="card-text">
            <b>Service Type:</b> {ServiceType}
          </div>
          <div className="card-text">
            <b>Car Count:</b> {CarCount}
          </div>

          <div className="card-text">
            <b>Time at Location:</b> {SecondsAtLocation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TPcard;
