import React, { Component } from 'react';
import CurrentWeekRefills from './CurrentWeekRefills';
import CurrentMonthRefills from './CurrentMonthRefills';
import CurrentYearRefills from './CurrentYearRefills';
import CurrentYearReffilsCount from './CurrentYearRefillsCount';
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
        <CurrentYearReffilsCount/>
        <StatCard title='This Year' value={678}/>
        <CurrentWeekRefills/>
        <CurrentMonthRefills/>
        <CurrentYearRefills/>
      </Row>
    );
  }
}

export default Refills;