/**** Displays TrainPosition data
  API call: https://api.wmata.com/TrainPositions/TrainPositions?contentType={contentType}
****/

import React, { Component } from 'react';

const colors = {
  RD: { color: 'white', backgroundColor: 'red' },
  BL: { color: 'white', backgroundColor: 'blue' },
  YL: { color: 'white', backgroundColor: 'yellow' },
  OR: { color: 'white', backgroundColor: 'orange' },
  GR: { color: 'white', backgroundColor: 'gray' },
  SV: { color: 'white', backgroundColor: 'silver' }
};

// https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
const formatTime = time => {
  // Hours, minutes and seconds
  const hrs = ~~(time / 3600);
  const mins = ~~((time % 3600) / 60);
  // const secs = ~~time % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = '';

  if (hrs > 0) {
    ret += '' + hrs + (hrs > 1 ? ' hrs ' : ' hr ');
  }

  ret += '' + mins + (mins > 1 ? ' mins' : ' min');
  return ret;
};

class TPcard extends Component {
  state = {
    oldSecs: null
  };

  componentDidMount() {
    const { SecondsAtLocation } = this.props;
    const oldSecs = SecondsAtLocation;
    this.setState({ oldSecs });
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevProp === null) return;
    const oldSecs = prevProp.SecondsAtLocation;
    if (oldSecs === prevState.oldSecs) return;

    this.setState({ oldSecs });
  }

  render() {
    const {
      TrainId,
      TrainNumber,
      ServiceType,
      LineCode,
      SecondsAtLocation,
      CarCount
    } = this.props;
    const { oldSecs } = this.state;
    // console.log(oldSecs);
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
              <b>Train Number:</b> {TrainNumber}
            </div>
            <div className="card-text">
              <b>Service Type:</b> {ServiceType}
            </div>
            <div className="card-text">
              <b>Car Count:</b> {CarCount}
            </div>

            <div className="card-text">
              <b>Time at Location:</b> {formatTime(SecondsAtLocation)} (
              {oldSecs})
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TPcard;
