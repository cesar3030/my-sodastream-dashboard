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
import { barChart } from "variables/charts.jsx";
import { Stats, CardCategory, CardStat } from "components";

class CardStatChart extends Component {
  render() {
    const chart = barChart.generate(this.props.chartData, this.props.chartLabels);
    return (
      <Card>
        <CardHeader>
          <CardCategory>Period</CardCategory>
          <CardTitle tag="h4">{this.props.cardTitle}</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xs={4} className="font-icon-list">
              <CardStat 
                title={this.props.statTitle}
                value={this.props.statValue}
              />
            </Col>
            <Col xs={8}>
              <div className="chart-area">
                <Bar
                  data={chart.data}
                  options={chart.options}
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

export default CardStatChart;