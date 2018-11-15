import { connect } from 'react-redux';
import { fetchCurrentYearUsageVolume } from '../actions/usage/currentYearActions';
import StatCard from '../components/StatCard';

const mapStateToProps = state => ({
  loading: state.usage.currentYear.volume.loading,
  value: state.usage.currentYear.volume.value,
  title: 'Current year volume (ml)'
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentYearUsageVolume());
    }
  }
};

const CurrentYearUsageVolume = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatCard);

export default CurrentYearUsageVolume;