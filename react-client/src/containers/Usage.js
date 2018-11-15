import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import CurrentWeekUsage from './CurrentWeekUsage';
import CurrentMonthUsage from './CurrentMonthUsage';

class Refills extends Component {
  render() {
    return (
      <Row>
        <Col s={12} m={6}>
          <CurrentWeekUsage/>
        </Col>
        <Col s={12} m={6}>
          <CurrentMonthUsage/>
        </Col>
      </Row>
    );
  }
}

export default Refills;