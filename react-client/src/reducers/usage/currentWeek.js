import {
  FETCH_CURRENT_WEEK_USAGE_PER_DATE_FAILURE,
  FETCH_CURRENT_WEEK_USAGE_PER_DATE_BEGIN,
  FETCH_CURRENT_WEEK_USAGE_PER_DATE_SUCCESS,
  FETCH_CURRENT_WEEK_USAGE_VOLUME_FAILURE,
  FETCH_CURRENT_WEEK_USAGE_VOLUME_BEGIN,
  FETCH_CURRENT_WEEK_USAGE_VOLUME_SUCCESS
} from "../../constants/usageActionsTypes";

const initState = {
  perDate: {
    loading: false,
    dates: [],
    usagePerDate: [],
    error: null
  },
  volume: {
    loading: false,
    value: 0,
    error: null
  }
};

const currentWeek = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_WEEK_USAGE_PER_DATE_FAILURE:
      return {
        ...state,
        perDate: {
          ...state.perDate,
          loading: false,
          error: action.payload.error
        }
      };
    case FETCH_CURRENT_WEEK_USAGE_PER_DATE_BEGIN:
      return {
        ...state,
        perDate: {
          ...state.perDate,
          loading: true,
          error: null
        }
      };
    case FETCH_CURRENT_WEEK_USAGE_PER_DATE_SUCCESS:
      return {
        ...state,
        perDate: {
          ...state.perDate,
          loading: false,
          dates: action.payload.labels,
          usagePerDate: action.payload.data
        }
      };
    case FETCH_CURRENT_WEEK_USAGE_VOLUME_FAILURE:
      return {
        ...state,
        volume: {
          ...state.volume,
          loading: false,
          error: action.payload.error
        }
      };
    case FETCH_CURRENT_WEEK_USAGE_VOLUME_BEGIN:
      return {
        ...state,
        volume: {
          ...state.volume,
          loading: true,
          error: null
        }
      };
    case FETCH_CURRENT_WEEK_USAGE_VOLUME_SUCCESS:
      return {
        ...state,
        volume: {
          ...state.volume,
          loading: false,
          value: action.payload
        }
      };
    default:
      return state;
  }
};

export default currentWeek;
