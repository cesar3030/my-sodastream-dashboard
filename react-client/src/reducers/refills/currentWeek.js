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
        ...state,
        perDate: {
          ...state.perDate,
          loading: false,
          error: action.payload.error
        }
      };
    case FETCH_CURRENT_WEEK_REFILLS_BEGIN:
      return {
        ...state,
        perDate: {
          ...state.perDate,
          loading: true,
          error: null
        }
      };
    case FETCH_CURRENT_WEEK_REFILLS_SUCCESS:
      return {
        ...state,
        perDate: {
          ...state.perDate,
          loading: false,
          dates: action.payload.dates,
          nbRefillsPerDate: action.payload.nbRefillsPerDate
        }
      };
    case FETCH_CURRENT_WEEK_REFILLS_COUNT_FAILURE:
      return {
        ...state,
        count: {
          ...state.count,
          loading: false,
          error: action.payload.error,
        }
      };
    case FETCH_CURRENT_WEEK_REFILLS_COUNT_BEGIN:
      return {
        ...state,
        count: {
          ...state.count,
          loading: true,
          error: null,
        }
      };
    case FETCH_CURRENT_WEEK_REFILLS_COUNT_SUCCESS:
      return {
        ...state,
        count: {
          ...state.count,
          loading: false,
          value: action.payload,
        }
      };
    default:
      return state
  }
};

export default currentWeek;