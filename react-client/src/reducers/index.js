import { BOX_CLICK } from "../constants/action-types";

const initialState = { };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOX_CLICK:
      return state;
    default:
      return state;
  }
};

export default rootReducer;