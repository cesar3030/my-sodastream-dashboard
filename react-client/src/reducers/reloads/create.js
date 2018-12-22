import { 
  CREATE_RELOAD_FAILURE, 
  CREATE_RELOAD_BEGIN, 
  CREATE_RELOAD_SUCCESS
} from '../../constants/reloadActionsTypes';

const initState = {
  newReload: null,
  loading: false,
  error: null
};

const create = (
  state = initState,
  action
) => {
  switch (action.type) {
    case CREATE_RELOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case CREATE_RELOAD_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case CREATE_RELOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        newReload: action.payload
      };
    default:
      return state
  }
};

export default create;