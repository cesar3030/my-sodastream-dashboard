import { 
  FETCH_CURRENT_WEEK_REFILLS_FAILURE, 
  FETCH_CURRENT_WEEK_REFILLS_BEGIN, 
  FETCH_CURRENT_WEEK_REFILLS_SUCCESS, 
  FETCH_CURRENT_WEEK_REFILLS_COUNT_FAILURE, 
  FETCH_CURRENT_WEEK_REFILLS_COUNT_BEGIN, 
  FETCH_CURRENT_WEEK_REFILLS_COUNT_SUCCESS 
} from '../../constants/refillsActionsTypes';

const initState = {
  perDate : {
    loading: false,
    dates: [],
    nbRefillsPerDate: [],
    error: null
  },
  count : {
    loading: false,
    value: 0,
    error: null
  }
};

const currentWeek = (
  state = initState,
  action
) => {
  switch (action.type) {
    case FETCH_CURRENT_WEEK_REFILLS_FAILURE:
      return {
        ...state.perDate,
        loading: false,
        error: action.payload.error
      };
    case FETCH_CURRENT_WEEK_REFILLS_BEGIN:
      return {
        ...state.perDate,
        loading: true,
        error: null
      };
    case FETCH_CURRENT_WEEK_REFILLS_SUCCESS:
      debugger;
      return {
        ...state.perDate,
        loading: false,
        dates: action.payload.dates,
        nbRefillsPerDate: action.payload.nbRefillsPerDate
      };
    case FETCH_CURRENT_WEEK_REFILLS_COUNT_FAILURE:
      return {
        ...state.count,
        loading: false,
        error: action.payload.error
      };
    case FETCH_CURRENT_WEEK_REFILLS_COUNT_BEGIN:
      return {
        ...state.count,
        loading: true,
        error: null
      };
    case FETCH_CURRENT_WEEK_REFILLS_COUNT_SUCCESS:
      debugger;
      return {
        ...state.count,
        loading: false,
        count: action.payload
      };
    default:
      return state
  }
};

export default currentWeek;