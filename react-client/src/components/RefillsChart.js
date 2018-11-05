import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchCurrentWeekRefills } from '../actions/refills/currentWeekActions';
import moment from 'moment-timezone';

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
      <div className="col s12 m6">
        <div className="card-panel">
          <h5>{this.props.chartTitle}</h5>
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
        </div>
      </div>
    );
  }
}

export default RefillsChart;