import { combineReducers } from "redux";
import refills from "./refills";
import usage from "./usage";

const rootReducer = combineReducers({
  refills,
  usage
});

export default rootReducer;
