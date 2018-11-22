import { connect } from 'react-redux';
import { fetchCurrentReload } from '../actions/reload/currentReloadActions';
import StatCard from '../components/StatCard';

const mapStateToProps = state => ({
  loading: state.reloads.current.loading,
  value: state.reloads.current.refillCount,
  title: 'Nb Refills'
});

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchCurrentReload());
    }
  }
};

const RelodRefillCount = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatCard);

export default RelodRefillCount;