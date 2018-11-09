import React, { Component } from 'react';
import CurrentWeekRefills from './CurrentWeekRefills';
import CurrentMonthRefills from './CurrentMonthRefills';
import ReloadsChart from '../components/ReloadsChart';
import { Row, Col } from 'react-materialize';

class Home extends Component {
  render() {
    return (
      <Row>
        <Col s={12} m={6}>
          <CurrentWeekRefills/>
        </Col>
        <Col s={12} m={6}>
          <ReloadsChart/>
        </Col>
        <Col s={12} m={6}>
          <CurrentMonthRefills/>
        </Col>
      </Row>
    );
  }
}

export default Home;