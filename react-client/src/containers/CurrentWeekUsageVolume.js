import { connect } from 'react-redux';
import { fetchCurrentWeekUsageVolume } from '../actions/usage/currentWeekActions';
import StatCard from '../components/StatCard';

const mapStateToProps = state => ({
  loading: state.usage.currentWeek.volume.loading,
  value: state.usage.currentWeek.volume.value,
  title: 'Current week volume (ml)'
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentWeekUsageVolume());
    }
  }
};

const CurrentWeekUsageVolume = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatCard);

export default CurrentWeekUsageVolume;