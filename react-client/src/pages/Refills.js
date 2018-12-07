import React, { Component } from 'react';
import CurrentWeekRefills from '../containers/CurrentWeekRefills';
import CurrentMonthRefills from '../containers/CurrentMonthRefills';
import CurrentYearRefills from '../containers/CurrentYearRefills';
import CurrentYearReffilsCount from '../containers/CurrentYearRefillsCount';
import CurrentMonthReffilsCount from '../containers/CurrentMonthRefillsCount';
import CurrentWeekReffilsCount from '../containers/CurrentWeekRefillsCount';
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