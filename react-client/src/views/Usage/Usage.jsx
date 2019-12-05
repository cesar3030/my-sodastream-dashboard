import React from "react";
import { connect } from "react-redux";
import {
  fetchCurrentWeekUsagePerDate,
  fetchCurrentWeekUsageVolume
} from "../../actions/usage/currentWeekActions";
import {
  fetchCurrentMonthUsagePerDate,
  fetchCurrentMonthUsageVolume
} from "../../actions/usage/currentMonthActions";
import {
  fetchCurrentYearUsagePerDate,
  fetchCurrentYearUsageVolume
} from "../../actions/usage/currentYearActions";

import { Row, Col } from "reactstrap";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import { PanelHeader, CardStatChart } from "components";

import { dashboardPanelChart } from "variables/charts.jsx";
import { CardBorderlessChart } from "../../components";

const mapStateToProps = state => ({
  usagePerDate: state.usage.currentWeek.perDate.usagePerDate,
  dates: state.usage.currentWeek.perDate.dates,
  chartTitle: "Current Week Refills",
  loading: state.usage.currentWeek.perDate.loading,
  currentWeek: {
    count: state.usage.currentWeek.volume.value,
    labels: state.usage.currentWeek.perDate.dates,
    data: state.usage.currentWeek.perDate.usagePerDate
  },
  currentMonth: {
    count: state.usage.currentMonth.volume.value,
    labels: state.usage.currentMonth.perDate.dates,
    data: state.usage.currentMonth.perDate.usagePerDate
  },
  currentYear: {
    count: state.usage.currentYear.volume.value,
    labels: state.usage.currentYear.perDate.dates,
    data: state.usage.currentYear.perDate.usagePerDate
  }
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentWeekUsagePerDate());
      dispatch(fetchCurrentWeekUsageVolume());
      dispatch(fetchCurrentMonthUsagePerDate());
      dispatch(fetchCurrentMonthUsageVolume());
      dispatch(fetchCurrentYearUsagePerDate());
      dispatch(fetchCurrentYearUsageVolume());
    }
  };
};

class Usage extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;

    if (typeof fetchData === "function") {
      fetchData();
    }
  }

  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12} md={6}>
              <CardBorderlessChart
                cardTitle="Current Week"
                chartLabels={this.props.currentWeek.labels}
                chartData={this.props.currentWeek.data}
                chartTooltipLabel="Volume (Liters)"
              />
            </Col>
            <Col xs={12} md={6}>
              <CardBorderlessChart
                cardTitle="Current Month"
                chartLabels={this.props.currentMonth.labels}
                chartData={this.props.currentMonth.data}
                chartTooltipLabel="Volume (Liters)"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CardStatChart
                cardTitle="Current Week"
                statTitle="Total Volumne (in Liters)"
                statValue={this.props.currentWeek.count}
                chartLabels={this.props.currentWeek.labels}
                chartData={this.props.currentWeek.data}
                chartTooltipLabel="Volume (Liters)"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CardStatChart
                cardTitle="Current Month"
                statTitle="Total Volumne (in Liters)"
                statValue={this.props.currentMonth.count}
                chartLabels={this.props.currentMonth.labels}
                chartData={this.props.currentMonth.data}
                chartTooltipLabel="Volume (Liters)"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CardStatChart
                cardTitle="Current Year"
                statTitle="Total Volumne (in Liters)"
                statValue={this.props.currentYear.count}
                chartLabels={this.props.currentYear.labels}
                chartData={this.props.currentYear.data}
                chartTooltipLabel="Volume (Liters)"
              />
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
)(Usage);
