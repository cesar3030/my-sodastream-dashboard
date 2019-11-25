import { combineReducers } from "redux";
import currentWeek from "./currentWeek";
import currentMonth from "./currentMonth";
import currentYear from "./currentYear";

const refills = combineReducers({
  currentWeek,
  currentMonth,
  currentYear
});

export default refills;
