import React from "react";
import { connect } from "react-redux";
import {
  fetchCurrentWeekRefillsPerDate,
  fetchCurrentWeekRefillsCount
} from "../../actions/refills/currentWeekActions";
import { fetchCurrentMonthRefillsCount } from "../../actions/refills/currentMonthActions";
import { fetchCurrentYearRefillsCount } from "../../actions/refills/currentYearActions";

import { fetchCurrentWeekUsageVolume } from "../../actions/usage/currentWeekActions";
import { fetchCurrentReload } from "../../actions/reload/currentReloadActions";

import { Row, Col, Card, CardBody, CardTitle, CardHeader } from "reactstrap";
// react plugin used to create charts
import { Line, Doughnut } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import { PanelHeader, CardStat, CardCategory } from "components";

import { dashboardPanelChart, doughnutChart } from "variables/charts.jsx";

const mapStateToProps = state => ({
  nbRefillsPerDate: state.refills.currentWeek.perDate.nbRefillsPerDate,
  dates: state.refills.currentWeek.perDate.dates,
  loading: state.refills.currentWeek.perDate.loading,
  refillsCountCurrentWeek: state.refills.currentWeek.count.value,
  refillsCountCurrentMonth: state.refills.currentMonth.count.value,
  refillsCountCurrentYear: state.refills.currentYear.count.value,
  usageVolume: state.usage.currentWeek.volume.value,
  reload: state.reloads.current
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentWeekRefillsPerDate());
      dispatch(fetchCurrentWeekRefillsCount());
      dispatch(fetchCurrentWeekUsageVolume());
      dispatch(fetchCurrentMonthRefillsCount());
      dispatch(fetchCurrentYearRefillsCount());
      dispatch(fetchCurrentReload());
    }
  };
};

class Overview extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;

    if (typeof fetchData === "function") {
      fetchData();
    }
  }

  render() {
    const chartData = dashboardPanelChart.data(
      this.props.nbRefillsPerDate,
      this.props.dates,
      "Nb Refills"
    );
    const { overAllUsagePercentage } = this.props.reload;
    const remainingOverAllUsagePercentage = 100 - overAllUsagePercentage;
    return (
      <div>
        <PanelHeader
          size="lg"
          content={
            <Line data={chartData} options={dashboardPanelChart.options} />
          }
        />
        <div className="content">
          <Row>
            <Col xs={12} sm={8}>
              <Row>
                <Col xs={12} md={6}>
                  <CardStat
                    title="Refills this week"
                    value={this.props.refillsCountCurrentWeek}
                    unit="Refills"
                  />
                </Col>
                <Col xs={12} md={6}>
                  <CardStat
                    title="Usage this week"
                    value={this.props.usageVolume}
                    unit="Liters"
                  />
                </Col>
                <Col xs={12} md={6}>
                  <CardStat
                    title="Refills this Year"
                    value={this.props.refillsCountCurrentYear}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <CardStat
                    title="Refills this month"
                    value={this.props.refillsCountCurrentMonth}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4}>
              <Card className="card-chart">
                <CardHeader>
                  <CardCategory>Reload usage</CardCategory>
                  {/* <CardTitle tag="h4">Reload usage</CardTitle> */}
                </CardHeader>
                <CardBody>
                  <Doughnut
                    data={doughnutChart(
                      [overAllUsagePercentage, remainingOverAllUsagePercentage],
                      ["Used CO2", "Remaining CO2"]
                    )}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);
