import RefillsChart from '../components/RefillsChart';
import { connect } from 'react-redux';
import { fetchCurrentWeekRefillsPerDate } from '../actions/refills/currentWeekActions';

const mapStateToProps = state => ({
  nbRefillsPerDate: state.refills.currentWeek.perDate.nbRefillsPerDate,
  dates: state.refills.currentWeek.perDate.dates,
  chartTitle: "Current Week Refills",
  loading: state.refills.currentWeek.perDate.loading
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentWeekRefillsPerDate())
    }
  }
};

const CurrentWeekReffils = connect(
  mapStateToProps,
  mapDispatchToProps
)(RefillsChart);

export default CurrentWeekReffils;