import RefillsChart from '../components/RefillsChart';
import { connect } from 'react-redux';
import { fetchCurrentWeekRefills } from '../actions/refills/currentWeekActions';

const mapStateToProps = state => ({
  nbRefillsPerDay: state.refills.currentWeek.nbRefillsPerDay,
  days: state.refills.currentWeek.days,
  chartTitle: "Current Week Refills",
  loading: state.refills.currentWeek.loading
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