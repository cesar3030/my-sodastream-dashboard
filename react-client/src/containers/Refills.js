import React, { Component } from 'react';
import CurrentWeekRefills from './CurrentWeekRefills';
import CurrentMonthRefills from './CurrentMonthRefills';
import CurrentYearRefills from './CurrentYearRefills';
import CurrentYearReffilsCount from './CurrentYearRefillsCount';
import CurrentMonthReffilsCount from './CurrentMonthRefillsCount';
import CurrentWeekReffilsCount from './CurrentWeekRefillsCount';
import StatCard from '../components/StatCard';
import { Row, Col } from 'react-materialize';

class Refills extends Component {
  render() {
    return (
      <Row>

        <Col s={12} m={4}>
          <CurrentWeekReffilsCount/>
        </Col>
        <Col s={12} m={4}>
          <CurrentMonthReffilsCount/>
        </Col>
        <Col s={12} m={4}>
          <CurrentYearReffilsCount/>
        </Col>
        <Col s={12} m={6}>
          <CurrentWeekRefills/>
        </Col>
        <Col s={12} m={6}>  
          <CurrentMonthRefills/>
        </Col>
        <Col s={12}>
          <CurrentYearRefills/>
        </Col>
      </Row>
    );
  }
}

export default Refills;