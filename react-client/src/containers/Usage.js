import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import CurrentWeekUsage from './CurrentWeekUsage';
import CurrentMonthUsage from './CurrentMonthUsage';
import CurrentYearUsage from './CurrentYearUsage';
import CurrentWeekUsageVolume from './CurrentWeekUsageVolume';
import CurrentMonthUsageVolume from './CurrentMonthUsageVolume';
import CurrentYearUsageVolume from './CurrentYearUsageVolume';

class Refills extends Component {
  render() {
    return (
      <Row>
        <Col s={12} m={4}>
          <CurrentWeekUsageVolume/>
        </Col>
        <Col s={12} m={4}>
          <CurrentMonthUsageVolume/>
        </Col>
        <Col s={12} m={4}>
          <CurrentYearUsageVolume/>
        </Col>
        <Col s={12} m={6}>
          <CurrentWeekUsage/>
        </Col>
        <Col s={12} m={6}>
          <CurrentMonthUsage/>
        </Col>
        <Col s={12}>
          <CurrentYearUsage/>
        </Col>
      </Row>
    );
  }
}

export default Refills;