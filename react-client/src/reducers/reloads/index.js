import { combineReducers } from "redux";
import current from "./current";
import all from "./all";

const reloads = combineReducers({
  current,
  all
});

export default reloads;