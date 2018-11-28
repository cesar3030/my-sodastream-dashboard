import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import StatCard from '../components/StatCard';
import ReloadUsageDoughnut from '../components/ReloadUsageDoughnut';
import { fetchCurrentReload } from '../actions/reload/currentReloadActions';
import { connect } from 'react-redux';

class CurrentReloadSection extends Component {
  
  componentDidMount() {
    const { fetchData } = this.props; 

    if(typeof fetchData === "function") {
      fetchData();
    }
  }
  
  render() {
    const remainingRefills = this.props.current.stats.refillCountAvg - this.props.current.refillCount;
    const remainingUsageTime = this.props.current.stats.timeUsageAvg - this.props.current.timeUsage;
    const RemainingC02Percentage = 100 - this.props.current.overAllUsagePercentage;
    return (
      <Row>
        <Col s={12} m={4}>
          <StatCard title="Number of refills" value={this.props.current.refillCount} />
        </Col>
        <Col s={12} m={4}>
          <StatCard title="Time usage" value={this.props.current.timeUsage} />
        </Col>
        <Col s={12} m={4}>
          <StatCard title="Installation Date" value={this.props.current.createdAt} />
        </Col>

        <Col s={12} m={4}>
          <StatCard title="Remaining refills" value={remainingRefills} />
        </Col>
        <Col s={12} m={4}>
          <StatCard title="Remaning usage time" value={remainingUsageTime} />
        </Col>
        <Col s={12} m={4}>
          <ReloadUsageDoughnut data={[this.props.current.overAllUsagePercentage, RemainingC02Percentage]}/>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  current: state.reloads.current
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentReload());
    }
  }
};

const CurrentReload = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentReloadSection);

export default CurrentReload;