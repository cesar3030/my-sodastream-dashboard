import {
  FETCH_CURRENT_RELOAD_FAILURE,
  FETCH_CURRENT_RELOAD_BEGIN,
  FETCH_CURRENT_RELOAD_SUCCESS
} from "../../constants/reloadActionsTypes";

const initState = {
  id: null,
  refillCount: 0,
  timeUsage: 0,
  endDate: null,
  createdAt: null,
  stats: {
    timeUsageAvg: 0,
    refillCountAvg: 0
  },
  timeUsagePercentage: 0,
  refillCountPercentage: 0,
  overAllUsagePercentage: 0,
  error: null,
  loading: false
};

const current = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_RELOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case FETCH_CURRENT_RELOAD_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_CURRENT_RELOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload
      };
    default:
      return state;
  }
};

export default current;
