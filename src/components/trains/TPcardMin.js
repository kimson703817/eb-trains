/**** Displays TrainPosition data
  API call: https://api.wmata.com/TrainPositions/TrainPositions?contentType={contentType}
****/

import { connect } from 'react-redux';
import React, { Component } from 'react';

class TPcardMin extends Component {
  render() {
    const { TrainId, ServiceType, LineCode } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{TrainId}</h5>
          <div className="card-text">{ServiceType}</div>
          <div className="card-text">
            {LineCode ? LineCode : 'Not In Service'}
          </div>
        </div>
      </div>
    );
  }
}

export default TPcardMin;
