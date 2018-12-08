import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import { Bar } from "react-chartjs-2";
import {
  dashboard24HoursPerformanceChart
} from "variables/charts.jsx";
import { Stats, CardCategory } from "components";

class CardRefills extends Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardCategory>Period</CardCategory>
          <CardTitle tag="h4">{this.props.title}</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs={4} className="font-icon-list">
              <Card className="card-tasks">
                <CardHeader>
                  <CardCategory>Total refills</CardCategory>
                </CardHeader>
                <CardBody>
                  <h3 class="text-center">{this.props.nbRefills}</h3>
                </CardBody>
                </Card>
            </Col>
            <Col xs={8}>
              <div className="chart-area">
                <Bar
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                />
              </div>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <hr />
          <Stats>
            {[
              {
                i: "now-ui-icons loader_refresh spin",
                t: "Updated 3 minutes ago"
              }
            ]}
          </Stats>
        </CardFooter>
      </Card>
    );
  }
}

export default CardRefills;