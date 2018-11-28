import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card } from 'react-materialize';

class ReloadUsageDoughnut extends Component {
  render() {
    const data = {
      labels: [
        'Used CO2',
        'Remaing C02'
      ],
      datasets: [{
        data: this.props.data,
        backgroundColor: [
        '#FF6384',
        '#36A2EB'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB'
        ]
      }]
    };

    return (
      <Card title='CO2 Usage'>
        <Doughnut data={data}/>
      </Card>
    );
  }
}

export default ReloadUsageDoughnut;