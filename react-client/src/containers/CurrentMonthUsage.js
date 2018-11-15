import RefillsChart from '../components/RefillsChart';
import { connect } from 'react-redux';
import { fetchCurrentMonthUsage } from '../actions/usage/currentMonthActions';

const mapStateToProps = state => ({
  nbRefillsPerDate: state.usage.currentMonth.perDate.usagePerDate,
  dates: state.usage.currentMonth.perDate.days,
  chartTitle: "Current Month Usage",
  loading: state.usage.currentMonth.perDate.loading
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentMonthUsage())
    }
  }
}

const CurrentMonthUsage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RefillsChart);

export default CurrentMonthUsage;