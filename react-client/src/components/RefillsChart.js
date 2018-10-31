import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchRefills } from '../actions/refillsActions';

class RefillsChart extends Component {

  jsonToLabelsAndDataArrays = (json) => {
    const labels = [];
    const data = [];

    for(let label in json) {
      labels.push(label);
      data.push(json[label]);
    }

    this.setState({
      labels: labels,
      data: data
    });
  }

  mockRequest = () => {
    const mockResponse = {
      'Monday': 1,
      'Tuesday': 2,
      'Wednesday': 1,
      'Thursday': 3,
      'Friday': 4,
      'Saturday': 7,
      'Sunday': 3
    };

    setTimeout(() => this.jsonToLabelsAndDataArrays(mockResponse), 4000);
  }

  componentDidMount() {
    this.props.dispatch(fetchRefills());
  }

  render = () => {

    const config = {
      datasets: [
        {
          label: 'Number of bottles refilled',
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
      labels: this.props.days
    };

    return (
      <div className="col s12 m6">
        <div className="card-panel">
          <h5>Refills chart</h5>
          <Line data={config}/>
        </div>
      </div>
    );
  }
}

export default RefillsChart;