import React from 'react';
import { Col, CardPanel } from 'react-materialize';

const StatCard = (props) => (
  <Col s={12} m={3}>
    <CardPanel className="teal lighten-4 black-text">
      <h5>{props.title}</h5>
      <span>{props.value}</span>
    </CardPanel>
  </Col>
);

export default StatCard;