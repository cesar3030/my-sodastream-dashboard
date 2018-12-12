import React from "react";
import { connect } from "react-redux";
import { fetchCurrentReload } from '../../actions/reload/currentReloadActions'

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
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentReload());
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
  
  render() {
    const { refillCount, timeUsage, overAllUsagePercentage } = this.props.current;
    const { refillCountAvg, timeUsageAvg } = this.props.current.stats;
    const remainingRefills = refillCountAvg - refillCount;
    const remainingTimeUsage = timeUsageAvg - timeUsage;
    const remainingOverAllUsagePercentage = 100 - overAllUsagePercentage;
    return (
      <div>
        <PanelHeader size="sm"/>
        <div className="content">
          <Row>
            <Col xs={12} md={3}>
              <CardStat
               title='Overall CO2 bottles'
               value='89'
              />
            </Col>
            <Col xs={12} md={3}>
              <CardStat
               title='This year CO2 bottles'
               value='36'
              />
            </Col>
            <Col xs={12} md={3}>
              <CardStat
               title='Next change in'
               value='9 Days'
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
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Number of refills</th>
                        <th>CO2 Time</th>
                        <th>Number of days</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td>$36,738</td>
                        <td>23</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td>$23,789</td>
                        <td>23</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td>$56,142</td>
                        <td>23</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td>$63,542</td>
                        <td>23</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td>$78,615</td>
                        <td>23</td>
                      </tr>
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
