import React, { Component } from 'react';
import { CardPanel } from 'react-materialize';

class StatCard extends Component {

  componentDidMount = () => {
    const { fetchData } = this.props; 

    if(typeof fetchData === "function") {
      fetchData();
    }
  }

  render() {
    return (
      <CardPanel className="teal lighten-4 black-text">
        <h5>{this.props.title}</h5>
        <span>{this.props.value}</span>
      </CardPanel>
    );
  }
}

export default StatCard;