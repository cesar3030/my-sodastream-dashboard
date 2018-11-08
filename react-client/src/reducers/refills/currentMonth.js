import { 
  FETCH_CURRENT_MONTH_REFILLS_FAILURE, 
  FETCH_CURRENT_MONTH_REFILLS_BEGIN, 
  FETCH_CURRENT_MONTH_REFILLS_SUCCESS 
} from '../../constants/refillsActionsTypes';

const initState = {
  loading: false,
  days: [],
  nbRefillsPerDate: [],
  error: null
};

const currentMonth = (
  state = initState,
  action
) => {
  switch (action.type) {
    case FETCH_CURRENT_MONTH_REFILLS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case FETCH_CURRENT_MONTH_REFILLS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_CURRENT_MONTH_REFILLS_SUCCESS:
      debugger;
      return {
        ...state,
        loading: false,
        days: action.payload.days,
        nbRefillsPerDate: action.payload.nbRefillsPerDate
      };
    default:
      return state
  }
};

export default currentMonth;