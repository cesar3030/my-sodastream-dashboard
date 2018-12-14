import React from "react";
import { connect } from "react-redux";
import { fetchCurrentWeekRefillsPerDate, fetchCurrentWeekRefillsCount } from '../../actions/refills/currentWeekActions'
import { fetchCurrentMonthRefillsPerDate, fetchCurrentMonthRefillsCount } from '../../actions/refills/currentMonthActions'
import { fetchCurrentYearRefillsPerDate, fetchCurrentYearRefillsCount } from '../../actions/refills/currentYearActions'
import { Row, Col } from "reactstrap";
import { Line } from "react-chartjs-2";
import { PanelHeader, CardStatChart } from "components";
import { dashboardPanelChart } from "variables/charts";
import { CardBorderlessChart } from "../../components";


const mapStateToProps = state => ({
  nbRefillsPerDate: state.refills.currentWeek.perDate.nbRefillsPerDate,
  dates: state.refills.currentWeek.perDate.dates,
  chartTitle: "Current Week Refills",
  loading: state.refills.currentWeek.perDate.loading,
  currentWeek: {
    count: state.refills.currentWeek.count.value,
    labels: state.refills.currentWeek.perDate.dates,
    data: state.refills.currentWeek.perDate.nbRefillsPerDate
  },
  currentMonth: {
    count: state.refills.currentMonth.count.value,
    labels: state.refills.currentMonth.perDate.dates,
    data: state.refills.currentMonth.perDate.nbRefillsPerDate
  },
  currentYear: {
    count: state.refills.currentYear.count.value,
    labels: state.refills.currentYear.perDate.dates,
    data: state.refills.currentYear.perDate.nbRefillsPerDate
  },
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentWeekRefillsPerDate());
      dispatch(fetchCurrentWeekRefillsCount());
      dispatch(fetchCurrentMonthRefillsPerDate());
      dispatch(fetchCurrentMonthRefillsCount());
      dispatch(fetchCurrentYearRefillsPerDate());
      dispatch(fetchCurrentYearRefillsCount());
    }
  }
};


class Refills extends React.Component {
  
  componentDidMount() {
    const { fetchData } = this.props; 

    if(typeof fetchData === "function") {
      fetchData();
    }
  }
  
  render() {

    const chartData = dashboardPanelChart.data(this.props.currentYear.data, this.props.currentYear.labels, "Nb refills");

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
            <Col xs={12} md={6}>
              <CardBorderlessChart 
                cardTitle="Current Week"
                chartLabels={this.props.currentWeek.labels}
                chartData={this.props.currentWeek.data}
                chartTooltipLabel="Nb refills"
              />
            </Col>
            <Col xs={12} md={6}>
              <CardBorderlessChart 
                cardTitle="Current Month"
                chartLabels={this.props.currentMonth.labels}
                chartData={this.props.currentMonth.data}
                chartTooltipLabel="Nb refills"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CardStatChart 
                cardTitle="Current Week"
                statTitle="Total Refills"
                statValue={this.props.currentWeek.count}
                chartLabels={this.props.currentWeek.labels}
                chartData={this.props.currentWeek.data}
                chartTooltipLabel="Nb refills"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CardStatChart 
                cardTitle="Current Month"
                statTitle="Total Refills"
                statValue={this.props.currentMonth.count}
                chartLabels={this.props.currentMonth.labels}
                chartData={this.props.currentMonth.data}
                chartTooltipLabel="Nb refills"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CardStatChart 
                cardTitle="Current Year"
                statTitle="Total Refills"
                statValue={this.props.currentYear.count}
                chartLabels={this.props.currentYear.labels}
                chartData={this.props.currentYear.data}
                chartTooltipLabel="Nb refills"
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Refills);
