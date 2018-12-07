import React, { Component } from 'react';
import CurrentWeekRefills from '../containers/CurrentWeekRefills';
import CurrentMonthRefills from '../containers/CurrentMonthRefills';
import ReloadsChart from '../components/ReloadsChart';
import Content from '../components/layout/Content';

class Home extends Component {
  render() {
    return (
      <Content>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <CurrentWeekRefills/>
          </div>
          <div className='col-xs-12 col-md-6'>
            <ReloadsChart/>
          </div>
          <div className='col-xs-12 col-md-6'>
            <CurrentMonthRefills/>
          </div>
        </div>
      </Content>
    );
  }
}

export default Home;