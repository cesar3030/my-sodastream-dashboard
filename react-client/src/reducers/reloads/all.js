import { 
  FETCH_ALL_RELOADS_FAILURE, 
  FETCH_ALL_RELOADS_BEGIN, 
  FETCH_ALL_RELOADS_SUCCESS,
  CREATE_RELOAD_SUCCESS
} from '../../constants/reloadActionsTypes';

const initState = {
  list:[],
  loading: false,
  error: null
};

const all = (
  state = initState,
  action
) => {
  switch (action.type) {
    case CREATE_RELOAD_SUCCESS:
     return {
       ...state,
       list: [...state.list, action.payload]
     }
    case FETCH_ALL_RELOADS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case FETCH_ALL_RELOADS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_ALL_RELOADS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload
      };
    default:
      return state
  }
};

export default all;