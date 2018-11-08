import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment-timezone';
import './refills-chart.css';
import { Col, Card, Preloader } from 'react-materialize';

class RefillsChart extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render = () => {
    const config = {
      datasets: [
        {
          label: 'Number of bottles refilled',
          precision: 1,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.nbRefillsPerDay
        }
      ],
      labels: this.props.days.map((date) => moment(date).format('dddd'))
    };

    return (
      <Col s={12} m={6}>
        <Card title={this.props.chartTitle}>
          <Preloader 
            className="floating-prefloader" 
            size='big' 
            active={this.props.loading}
          />
          <Line
            data={config}
            options={
              {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
              }
            }
          />
        </Card>
      </Col>
    );
  }
}

export default RefillsChart;