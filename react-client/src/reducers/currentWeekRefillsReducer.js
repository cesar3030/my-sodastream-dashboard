
import { 
  FETCH_REFILLS_FAILURE, 
  FETCH_REFILLS_BEGIN, 
  FETCH_REFILLS_SUCCESS 
} from '../constants/refillsActionsTypes';

const initState = {
  loading: false,
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  reffilsPerDay: [1,2,3,4,5,6,7],
  error: null
};

export const currentWeekReffils = (
  initState,
  action
) => {
  switch (action.type) {
    case FETCH_REFILLS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case FETCH_REFILLS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_REFILLS_SUCCESS:
      return {
        ...state,
        loading: false,
        days: action.payload.labels,
        refillsPerDay: action.payload.efillsPerDay
      };
    default:
      return state
  }
};