import RefillsChart from '../components/RefillsChart';
import { connect } from 'react-redux';
import { fetchCurrentYearUsagePerDate } from '../actions/usage/currentYearActions';

const mapStateToProps = state => ({
  nbRefillsPerDate: state.usage.currentYear.perDate.usagePerDate,
  dates: state.usage.currentYear.perDate.dates,
  chartTitle: "Current Year Usage",
  loading: state.usage.currentYear.perDate.loading
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentYearUsagePerDate())
    }
  }
};

const CurrentYearUsage = connect(
  mapStateToProps,
  mapDispatchToProps
)(RefillsChart);

export default CurrentYearUsage;