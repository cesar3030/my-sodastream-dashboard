import { connect } from 'react-redux';
import { fetchCurrentMonthUsageVolume } from '../actions/usage/currentMonthActions';
import StatCard from '../components/StatCard';

const mapStateToProps = state => ({
  loading: state.usage.currentMonth.volume.loading,
  value: state.usage.currentMonth.volume.value,
  title: 'Current month volume (ml)'
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentMonthUsageVolume());
    }
  }
};

const CurrentMonthUsageVolume = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatCard);

export default CurrentMonthUsageVolume;