import { connect } from 'react-redux';
import { fetchCurrentMonthRefillsCount } from '../actions/refills/currentMonthActions';
import StatCard from '../components/StatCard';

const mapStateToProps = state => ({
  loading: state.refills.currentMonth.count.loading,
  value: state.refills.currentMonth.count.value,
  title: 'Nb refills this month'
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentMonthRefillsCount());
    }
  }
};

const CurrentMonthReffilsCount = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatCard);

export default CurrentMonthReffilsCount;