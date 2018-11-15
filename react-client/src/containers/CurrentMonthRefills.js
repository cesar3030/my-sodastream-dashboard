import RefillsChart from '../components/RefillsChart';
import { connect } from 'react-redux';
import { fetchCurrentMonthRefills } from '../actions/refills/currentMonthActions';

const mapStateToProps = state => ({
  nbRefillsPerDate: state.refills.currentMonth.perDate.nbRefillsPerDate,
  dates: state.refills.currentMonth.perDate.dates,
  chartTitle: "Current Month Refills",
  loading: state.refills.currentMonth.perDate.loading
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