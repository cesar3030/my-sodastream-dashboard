import { combineReducers } from "redux";
import current from "./current";

const reloads = combineReducers({
  current,
});

export default reloads;