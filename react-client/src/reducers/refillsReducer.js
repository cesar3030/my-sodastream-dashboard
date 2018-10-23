import { 
  FETCH_REFILLS_FAILURE, 
  FETCH_REFILLS_REQUEST, 
  FETCH_REFILLS_SUCCESS 
} from '../constants/refillsActionsTypes';

export const reffils = (
  state = {
    isFetching: false,
    didInvalidate: false
  },
  action
) => {
  switch (action.type) {
    case FETCH_REFILLS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false
      });
    case FETCH_REFILLS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    case FETCH_REFILLS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        action.period: action.refills;
      })
    default:
      return state
  }
};