import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

export default CardStat = (props) => {
  return (
    <Card className="card-stat">
      <CardHeader>
        <CardCategory>{props.statTitle}</CardCategory>
      </CardHeader>
      <CardBody>
        <h3 class="text-center">{props.statValue}</h3>
      </CardBody>
    </Card>
  );
};