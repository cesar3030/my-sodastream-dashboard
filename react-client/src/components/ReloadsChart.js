import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { Col, Card } from 'react-materialize';

class ReloadsChart extends Component {
  render() {
    const data = {
      datasets: [
        {
          label: 'Number of CO2 bottle used',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: []
        }
      ],
      labels: []
    };

    return (
      <Card title='Reloads chart'>
        <Bar data={data}/>
      </Card>
    );
  }
}

export default ReloadsChart;