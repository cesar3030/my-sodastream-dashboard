import ReffillsChart from './RefillsChart';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  nbRefillsPerDay: state.currentWeekRefills.nbRefillsPerDay,
  days: state.currentWeekRefills.days
})

const CurrentWeekReffils = connect(
  mapStateToProps
)(ReffillsChart);

export default CurrentWeekReffils;