import React, { Component } from 'react';
import { borderlessLineChart } from "variables/charts.jsx";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
} from "reactstrap";

import { Line } from "react-chartjs-2";
import { Stats, CardCategory } from "components";

class CardBorderlessChart extends Component {
  render() {
    const chart = borderlessLineChart.generate(this.props.chartData, this.props.chartLabels, this.props.chartTooltipLabel);
    
    return (
      <Card className="card-chart">
        <CardHeader>
          <CardCategory>Tendency</CardCategory>
          <CardTitle tag="h4">{this.props.cardTitle}</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="chart-area">
            <Line
              data={chart.data}
              options={chart.options}
            />
          </div>
        </CardBody>
        <CardFooter>
          <Stats>
            {[
              {
                i: "now-ui-icons arrows-1_refresh-69",
                t: "Just Updated"
              }
            ]}
          </Stats>
        </CardFooter>
      </Card>
    );
  }
}

export default CardBorderlessChart;