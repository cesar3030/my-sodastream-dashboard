import { 
  FETCH_CURRENT_MONTH_USAGE_PER_DATE_FAILURE, 
  FETCH_CURRENT_MONTH_USAGE_PER_DATE_BEGIN, 
  FETCH_CURRENT_MONTH_USAGE_PER_DATE_SUCCESS,
  FETCH_CURRENT_MONTH_USAGE_VOLUME_FAILURE, 
  FETCH_CURRENT_MONTH_USAGE_VOLUME_BEGIN, 
  FETCH_CURRENT_MONTH_USAGE_VOLUME_SUCCESS
} from '../../constants/usageActionsTypes';

const initState = {
  perDate: {
    loading: false,
    days: [],
    usagePerDate: [],
    error: null
  },
  volume: {
    loading: false,
    value: 0,
    error: null
  }
};

const currentMonth = (
  state = initState,
  action
) => {
  switch (action.type) {
    case FETCH_CURRENT_MONTH_USAGE_PER_DATE_FAILURE:
      return {
        ...state,
        perDate: {
          ...state.perDate,
          loading: false,
          error: action.payload.error
        }
      };
    case FETCH_CURRENT_MONTH_USAGE_PER_DATE_BEGIN:
      return {
        ...state,
        perDate: {
          ...state.perDate,
          loading: true,
          error: null
        }
      };
    case FETCH_CURRENT_MONTH_USAGE_PER_DATE_SUCCESS:
      return {
        ...state,
        perDate: {
          ...state.perDate,
          loading: false,
          days: action.payload.days,
          usagePerDate: action.payload.usagePerDate
        }
      };
    case FETCH_CURRENT_MONTH_USAGE_VOLUME_FAILURE:
      return {
        ...state,
        volume: {
          ...state.count,
          loading: false,
          error: action.payload.error
        }
        
      };
    case FETCH_CURRENT_MONTH_USAGE_VOLUME_BEGIN:
      return {
        ...state,
        volume: {
          ...state.count,
          loading: true,
          error: null
        }
      };
    case FETCH_CURRENT_MONTH_USAGE_VOLUME_SUCCESS:
      return {
        ...state,
        volume: {
          ...state.count,
          loading: false,
          value: action.payload
        }
      };
    default:
      return state
  }
};

export default currentMonth;