import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import CurrentWeekUsage from '../containers/CurrentWeekUsage';
import CurrentMonthUsage from '../containers/CurrentMonthUsage';
import CurrentYearUsage from '../containers/CurrentYearUsage';
import CurrentWeekUsageVolume from '../containers/CurrentWeekUsageVolume';
import CurrentMonthUsageVolume from '../containers/CurrentMonthUsageVolume';
import CurrentYearUsageVolume from '../containers/CurrentYearUsageVolume';

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