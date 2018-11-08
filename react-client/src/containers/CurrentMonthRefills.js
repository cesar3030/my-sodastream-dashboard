import RefillsChart from '../components/RefillsChart';
import { connect } from 'react-redux';
import { fetchCurrentMonthRefills } from '../actions/refills/currentMonthActions';

const mapStateToProps = state => ({
  nbRefillsPerDay: state.refills.currentMonth.nbRefillsPerDay,
  days: state.refills.currentMonth.days,
  chartTitle: "Current Month Refills",
  loading: state.refills.currentMonth.loading
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentMonthRefills())
    }
  }
}

const CurrentMonthReffils = connect(
  mapStateToProps,
  mapDispatchToProps
)(RefillsChart);

export default CurrentMonthReffils;