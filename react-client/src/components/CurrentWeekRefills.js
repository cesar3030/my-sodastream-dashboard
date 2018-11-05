import RefillsChart from './RefillsChart';
import { connect } from 'react-redux';
import { fetchCurrentWeekRefills } from '../actions/refillsActions';

const mapStateToProps = state => ({
  nbRefillsPerDay: state.currentWeekRefills.nbRefillsPerDay,
  days: state.currentWeekRefills.days,
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