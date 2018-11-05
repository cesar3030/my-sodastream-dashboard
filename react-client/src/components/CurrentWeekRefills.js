import RefillsChart from './RefillsChart';
import { connect } from 'react-redux';
import { fetchCurrentWeekRefills } from '../actions/refills/currentWeekActions';

const mapStateToProps = state => ({
  nbRefillsPerDay: state.refills.currentWeek.nbRefillsPerDay,
  days: state.refills.currentWeek.days,
  chartTitle: "Current Week Refills"
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentWeekRefills())
    }
  }
}

const CurrentWeekReffils = connect(
  mapStateToProps,
  mapDispatchToProps
)(RefillsChart);

export default CurrentWeekReffils;