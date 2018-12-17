import React from "react";
import { connect } from "react-redux";
import { fetchCurrentWeekRefillsPerDate, fetchCurrentWeekRefillsCount } from '../../actions/refills/currentWeekActions'
import { fetchCurrentWeekUsageVolume } from '../../actions/usage/currentWeekActions'
import { fetchCurrentReload } from '../../actions/reload/currentReloadActions';

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader
} from "reactstrap";
// react plugin used to create charts
import { Line, Doughnut } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import { PanelHeader, CardStat, CardCategory } from "components";

import {
  dashboardPanelChart,
  doughnutChart
} from "variables/charts.jsx";

const mapStateToProps = state => ({
  nbRefillsPerDate: state.refills.currentWeek.perDate.nbRefillsPerDate,
  dates: state.refills.currentWeek.perDate.dates,
  loading: state.refills.currentWeek.perDate.loading,
  refillsCount: state.refills.currentWeek.count.value,
  usageVolume: state.usage.currentWeek.volume.value,
  reload: state.reloads.current,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentWeekRefillsPerDate())
      dispatch(fetchCurrentWeekRefillsCount())
      dispatch(fetchCurrentWeekUsageVolume())
      dispatch(fetchCurrentReload());
    }
  }
};


class Overview extends React.Component {
  
  componentDidMount() {
    const { fetchData } = this.props; 

    if(typeof fetchData === "function") {
      fetchData();
    }
  }
  
  render() {
    const chartData = dashboardPanelChart.data(this.props.nbRefillsPerDate, this.props.dates, "Nb Refills");
    const { overAllUsagePercentage } = this.props.reload;
    const remainingOverAllUsagePercentage = 100 - overAllUsagePercentage;
    return (
      <div>
        <PanelHeader
          size="lg"
          content={
            <Line
              data={chartData}
              options={dashboardPanelChart.options}
            />
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} sm={8}>
              <Row>
                <Col xs={12} md={6}>
                  <CardStat
                  title='Refills this week'
                  value={this.props.refillsCount}
                  unit='Refills'
                  />
                </Col>
                <Col xs={12} md={6}>
                  <CardStat
                  title='Usage this week'
                  value={this.props.usageVolume}
                  unit='Liters'
                  />
                </Col>
                <Col xs={12} md={6}>
                  <CardStat
                  title='Refill this week'
                  value='3'
                  />
                </Col>
                <Col xs={12} md={6}>
                  <CardStat
                  title='Usage this week'
                  value='45'
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Tendency</CardCategory>
                  <CardTitle tag="h4">Reload usage</CardTitle>
                </CardHeader>
                <CardBody>
                  <Doughnut data={doughnutChart(
                      [overAllUsagePercentage,remainingOverAllUsagePercentage],
                      ['Used CO2', 'Remaining CO2']
                    )}>
                  </Doughnut>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
