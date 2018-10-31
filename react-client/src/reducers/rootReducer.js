import { combineReducers } from "redux";
import currentWeekRefills from "./currentWeekRefillsReducer";

export default combineReducers({
  currentWeekRefills
});


// const initialState = {
//   refills: {
//     currentWeek: {
//       isFetching: false,
//       didInvalidate: false,
//       lastUpdated: 1439478405547,
//       labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//       data: [1,2,3,4,5,6,7],
//     },
//     perWeek: {
//       isFetching: false,
//       didInvalidate: false,
//       lastUpdated: 1439478405547,

//       "2018-09-30": {
//         labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//         data: [1,2,3,4,5,6,7]
//       },
//       "2018-09-23": [1,2,3,4,5,6,7]
//     }
//   }
// };