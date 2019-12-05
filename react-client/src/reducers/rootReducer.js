import { combineReducers } from "redux";
import refills from "./refills";
import usage from "./usage";
import reloads from "./reloads";

const rootReducer = combineReducers({
  refills,
  usage,
  reloads
});

export default rootReducer;
