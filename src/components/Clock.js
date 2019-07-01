import React from 'react';

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
        <h6>
          {this.state.estTime.toLocaleTimeString('en-US', this.options)} (EST)
        </h6>
      </div>
    );
  }
}

export default Clock;
