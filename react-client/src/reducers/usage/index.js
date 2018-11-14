import { combineReducers } from "redux";
import currentWeek from "./currentWeek";

const refills = combineReducers({
  currentWeek,
});

export default refills;