import React, { Component } from 'react'
import RefillsChart from './RefillsChart'
import ReloadsChart from './ReloadsChart'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <RefillsChart/>
          <ReloadsChart/>
        </div>
      </div>
    );
  }
}

export default Home