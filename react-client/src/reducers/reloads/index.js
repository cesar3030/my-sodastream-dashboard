import { combineReducers } from "redux";
import current from "./current";
import create from "./create";
import all from "./all";

const reloads = combineReducers({
  current,
  all,
  create
});

export default reloads;