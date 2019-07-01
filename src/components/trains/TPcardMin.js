/**** Displays TrainPosition data
  API call: https://api.wmata.com/TrainPositions/TrainPositions?contentType={contentType}
****/

import React, { Component } from 'react';

class TPcardMin extends Component {
  render() {
    const { TrainId, ServiceType, LineCode } = this.props;
    let color = null;
    let backgroundColor = null;
    switch (LineCode) {
      case 'RD':
        color = 'white';
        backgroundColor = 'red';
        break;
      case 'BL':
        color = 'white';
        backgroundColor = 'blue';
        break;
      case 'YL':
        color = 'black';
        backgroundColor = 'yellow';
        break;
      case 'OR':
        color = 'white';
        backgroundColor = 'orange';
        break;
      case 'GR':
        color = 'white';
        backgroundColor = 'gray';
        break;
      case 'SV':
        color = 'white';
        backgroundColor = 'silver';
        break;
      default:
        color = 'black';
        backgroundColor = 'white';
    }

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
  }
}

export default TPcardMin;
