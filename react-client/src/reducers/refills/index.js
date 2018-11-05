import { combineReducers } from "redux";
import currentWeek from "./currentWeek";
import currentMonth from "./currentMonth";

const refills = combineReducers({
  currentWeek,
  currentMonth
});

export default refills;