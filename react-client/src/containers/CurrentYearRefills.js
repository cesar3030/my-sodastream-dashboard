import RefillsChart from '../components/RefillsChart';
import { connect } from 'react-redux';
import { fetchCurrentYearRefillsPerDate } from '../actions/refills/currentYearActions';

const mapStateToProps = state => ({
  nbRefillsPerDate: state.refills.currentYear.perDate.nbRefillsPerDate,
  dates: state.refills.currentYear.perDate.dates,
  chartTitle: "Current Year Refills",
  loading: state.refills.currentYear.perDate.loading
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentYearRefillsPerDate())
    }
  }
};

const CurrentYearReffils = connect(
  mapStateToProps,
  mapDispatchToProps
)(RefillsChart);

export default CurrentYearReffils;