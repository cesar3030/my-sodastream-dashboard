import RefillsChart from '../components/RefillsChart';
import { connect } from 'react-redux';
import { fetchCurrentWeekUsagePerDate } from '../actions/usage/currentWeekActions';

const mapStateToProps = state => ({
  nbRefillsPerDate: state.usage.currentWeek.perDate.usagePerDate,
  dates: state.usage.currentWeek.perDate.dates,
  chartTitle: "Current Week Usage",
  loading: state.usage.currentWeek.perDate.loading
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentWeekUsagePerDate())
    }
  }
};

const CurrentWeekUsage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RefillsChart);

export default CurrentWeekUsage;