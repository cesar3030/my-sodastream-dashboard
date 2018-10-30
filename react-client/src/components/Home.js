import React, { Component } from 'react';
import CurrentWeekRefills from './CurrentWeekRefills';
import ReloadsChart from './ReloadsChart';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <CurrentWeekRefills/>
          <ReloadsChart/>
        </div>
      </div>
    );
  }
}

export default Home;