import React, { Component } from 'react';
import RelodRefillCount from './RelodRefillCount';
import { Row, Col } from 'react-materialize';

class Refills extends Component {
  render() {
    return (
      <Row>
        <Col s={12} m={4}>
          <RelodRefillCount/>
        </Col>
      </Row>
    );
  }
}

export default Refills;