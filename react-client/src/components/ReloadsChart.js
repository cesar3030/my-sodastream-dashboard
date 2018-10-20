import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';


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
          data: [1, 2, 3, 1, 5, 2, 7, 8, 2, 6, 2, 6]
        }
      ],
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    };

    return (
      <div className="col s12 m6">
        <div className="card-panel">
          <h5>Reloads chart</h5>
          <Bar data={data}/>
        </div>
      </div>
    );
  }
}

export default ReloadsChart