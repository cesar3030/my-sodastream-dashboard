import React from "react";
import { connect } from "react-redux";
import { fetchCurrentWeekRefillsPerDate, fetchCurrentWeekRefillsCount } from '../../actions/refills/currentWeekActions'
import { fetchCurrentMonthRefillsPerDate, fetchCurrentMonthRefillsCount } from '../../actions/refills/currentMonthActions'
import { fetchCurrentYearRefillsPerDate, fetchCurrentYearRefillsCount } from '../../actions/refills/currentYearActions'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import { PanelHeader, Stats, CardCategory, CardRefills } from "components";

import {
  dashboardPanelChart,
  dashboardShippedProductsChart,
  dashboardAllProductsChart,
  dashboard24HoursPerformanceChart
} from "variables/charts.jsx";
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

    const chartData = dashboardPanelChart.data(this.props.currentYear.data, this.props.currentYear.labels);

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
                title="Current Week" 
                labels={this.props.currentWeek.labels}
                data={this.props.currentWeek.data}
              />
            </Col>
            <Col xs={12} md={6}>
              <CardBorderlessChart 
                title="Current Month" 
                labels={this.props.currentMonth.labels}
                data={this.props.currentMonth.data}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CardRefills 
                title="Current Week"
                nbRefills={this.props.currentWeek.count}
                labels={this.props.currentWeek.labels}
                data={this.props.currentWeek.data}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CardRefills 
                title="Current Month"
                nbRefills={this.props.currentMonth.count}
                labels={this.props.currentMonth.labels}
                data={this.props.currentMonth.data}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CardRefills 
                title="Current Year"
                nbRefills={this.props.currentYear.count}
                labels={this.props.currentYear.labels}
                data={this.props.currentYear.data}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Refills);
