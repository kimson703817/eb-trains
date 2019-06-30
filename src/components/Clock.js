import React, { Component } from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { estTime: new Date() };
    this.options = { timeZone: 'America/New_York' };
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      estTime: new Date()
    });
  };

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>
          It is {this.state.estTime.toLocaleTimeString('en-US', this.options)}.
        </h2>
      </div>
    );
  }
}

export default Clock;
