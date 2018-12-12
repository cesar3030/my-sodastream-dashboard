import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { CardCategory } from "components";

const CardStat = (props) => {
  return (
    <Card className="card-stat">
      <CardHeader>
        <CardCategory>{props.title}</CardCategory>
      </CardHeader>
      <CardBody>
        <h3 class="text-center">{props.value}</h3>
      </CardBody>
    </Card>
  );
};

export default CardStat;