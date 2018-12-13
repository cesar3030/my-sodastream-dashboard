import React from "react";
import { connect } from "react-redux";
import { fetchCurrentReload } from '../../actions/reload/currentReloadActions';
import { fetchAllReloads } from '../../actions/reload/allReloadsActions';
import DateFormat from '../../utils/date-format';
import moment from 'moment-timezone';

import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Table
} from "reactstrap";
// react plugin used to create charts
import { Doughnut } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import { PanelHeader, CardStat, CardCategory } from "components";

import { doughnutChart } from "variables/charts.jsx";


const mapStateToProps = state => ({
  current: state.reloads.current,
  allReloads: state.reloads.all.list
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentReload());
      dispatch(fetchAllReloads());
    }
  }
};


class Reload extends React.Component {
  
  componentDidMount() {
    const { fetchData } = this.props; 

    if(typeof fetchData === "function") {
      fetchData();
    }
  }

  getNbReloadThisYear() {
    const currentyear = moment().tz(process.env.REACT_APP_TIMEZONE).year;
    return this.props.allReloads
      .filter((reload) => {
      return currentyear === DateFormat.stringDateToMomentTimezone(reload.createdAt).year
      })
      .length;
  }
  
  render() {
    const { refillCount, timeUsage, overAllUsagePercentage } = this.props.current;
    const { refillCountAvg, timeUsageAvg } = this.props.current.stats;
    const remainingRefills = refillCountAvg - refillCount;
    const remainingTimeUsage = timeUsageAvg - timeUsage;
    const remainingOverAllUsagePercentage = 100 - overAllUsagePercentage;
    const nbReloadThisYear = this.getNbReloadThisYear();
    return (
      <div>
        <PanelHeader size="sm"/>
        <div className="content">
          <Row>
            <Col xs={12} md={4}>
              <CardStat
               title='Overall CO2 bottles'
               value={this.props.allReloads.length}
              />
            </Col>
            <Col xs={12} md={4}>
              <CardStat
               title='This year CO2 bottles'
               value={nbReloadThisYear}
              />
            </Col>
            <Col xs={12} md={4}>
              <CardStat
               title='Next change in'
               value='9'
               unit='Days'
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardCategory>Period</CardCategory>
                  <CardTitle tag="h4">{this.props.cardTitle}</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row className='align-items-center'>
                    <Col xs={12} md={7}>
                      <Row>
                        <Col xs={12} md={6}>
                          <CardStat
                            title='Refills to date'
                            value={refillCount}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <CardStat
                            title='Remaing Refills'
                            value={remainingRefills}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={6}>
                          <CardStat
                            title='CO2 Used (in seconds)'
                            value={timeUsage}
                          />
                        </Col>
                        <Col xs={12} md={6}>
                          <CardStat
                            title='CO2 Remaining (in seconds)'
                            value={remainingTimeUsage}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} md={5}>
                      <Doughnut data={doughnutChart(
                          [overAllUsagePercentage,remainingOverAllUsagePercentage],
                          ['Used CO2', 'Remaining CO2']
                        )}>
                      </Doughnut>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
          <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardCategory>Details</CardCategory>
                  <CardTitle tag="h4">Reload list</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className=" text-primary">
                      <tr>
                        <th>Reload Number</th>
                        <th>Number of days</th>
                        <th>Number of refills</th>
                        <th>CO2 Time</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      { 
                        this.props.allReloads.map((reload, index) => {
                          return (
                            <tr>
                              <td>{this.props.allReloads.length - index}</td>
                              <td>{reload.endDate ? `${DateFormat.getDateDifference(reload.createdAt, reload.endDate)} Days` : "- - - -"}</td>
                              <td>{reload.refillCount}</td>
                              <td>{reload.timeUsage}</td>
                              <td>{DateFormat.getMonthDateOrdinal(reload.createdAt)}</td>
                              <td>{reload.endDate ? DateFormat.getMonthDateOrdinal(reload.endDate) : "- - - -"}</td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
          </Row>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reload);
