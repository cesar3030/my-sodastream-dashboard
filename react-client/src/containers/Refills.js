import React, { Component } from 'react';
import CurrentWeekRefills from './CurrentWeekRefills';
import CurrentMonthRefills from './CurrentMonthRefills';
import StatCart from '../components/StatCard';
import { Row } from 'react-materialize';

class Refills extends Component {
  render() {
    return (
      <Row>
        <CurrentWeekRefills/>
        <CurrentMonthRefills/>
      </Row>
    );
  }
}

export default Refills;