import { connect } from 'react-redux';
import { fetchCurrentWeekRefillsCount } from '../actions/refills/currentWeekActions';
import StatCard from '../components/StatCard';

const mapStateToProps = state => ({
  loading: state.refills.currentWeek.count.loading,
  value: state.refills.currentWeek.count.value,
  title: 'Nb refills this week'
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentWeekRefillsCount());
    }
  }
};

const CurrentWeekReffilsCount = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatCard);

export default CurrentWeekReffilsCount;