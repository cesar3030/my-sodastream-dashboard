import { connect } from 'react-redux';
import { fetchCurrentYearRefillsCount } from '../actions/refills/currentYearActions';
import StatCard from '../components/StatCard';

const mapStateToProps = state => ({
  loading: state.refills.currentYear.count.loading,
  value: state.refills.currentYear.count.value,
  title: 'Nb refills this year'
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentYearRefillsCount());
    }
  }
};

const CurrentWeekReffilsCount = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatCard);

export default CurrentWeekReffilsCount;