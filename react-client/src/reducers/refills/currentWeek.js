import { 
  FETCH_CURRENT_WEEK_REFILLS_FAILURE, 
  FETCH_CURRENT_WEEK_REFILLS_BEGIN, 
  FETCH_CURRENT_WEEK_REFILLS_SUCCESS 
} from '../../constants/refillsActionsTypes';

const initState = {
  loading: false,
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  nbRefillsPerDay: [1,2,3,4,5,6,7],
  error: null
};

const currentWeek = (
  state = initState,
  action
) => {
  switch (action.type) {
    case FETCH_CURRENT_WEEK_REFILLS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case FETCH_CURRENT_WEEK_REFILLS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_CURRENT_WEEK_REFILLS_SUCCESS:
      debugger;
      return {
        ...state,
        loading: false,
        days: action.payload.days,
        nbRefillsPerDay: action.payload.nbRefillsPerDay
      };
    default:
      return state
  }
};

export default currentWeek;