import currentWeek from "./currentWeekRefillsReducer";
import { combineReducers } from "redux";

const refills = combineReducers({
  currentWeek
});

export default refills;