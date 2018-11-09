import React, { Component } from 'react';
import CurrentWeekRefills from './CurrentWeekRefills';
import CurrentMonthRefills from './CurrentMonthRefills';
import CurrentMonthReffilsCount from './CurrentMonthRefillsCount';
import CurrentWeekReffilsCount from './CurrentWeekRefillsCount';
import StatCard from '../components/StatCard';
import { Row } from 'react-materialize';

class Refills extends Component {
  render() {
    return (
      <Row>
        <CurrentWeekReffilsCount/>
        <CurrentMonthReffilsCount/>
        {/* <StatCard title='This Month' value={34}/>
        <StatCard title='This Year' value={678}/>
        <StatCard title='Average time' value={4.67}/> */}
        <CurrentWeekRefills/>
        <CurrentMonthRefills/>
      </Row>
    );
  }
}

export default Refills;