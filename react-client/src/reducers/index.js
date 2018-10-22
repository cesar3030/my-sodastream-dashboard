import { ADD_ARTICLE, BOX_CLICK, JUMP_TO_MOVE } from "../constants/action-types";

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