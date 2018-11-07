import React, { Component } from 'react';
import CurrentWeekRefills from './CurrentWeekRefills';
import CurrentMonthRefills from './CurrentMonthRefills';

class Refills extends Component {
  render() {
    return (
      <div className="row">
        <CurrentWeekRefills/>
        <CurrentMonthRefills/>
      </div>
    );
  }
}

export default Refills;